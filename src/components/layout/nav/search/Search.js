import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import './search.css';
import Spinner from '../../../shared/loadingSpinner/Spinner';
import SearchResultCard from '../searchResultCard/SearchResultCard';
import SearchByGenre from './searchByGenre/SearchByGenre';

const Search = ({ toggleModal }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const navigate = useNavigate();

    const fetchSearchResults = debounce(async (searchTerm) => {
        setSearchTerm(searchTerm);
        if(searchTerm !== ''){
            setIsSearchLoading(true);
            await fetch(`${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${searchTerm}&api_key=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Error fetching query results. Response not OK");
                    }
                    return res.json()
                })
                .then(resData =>{
                        setSearchResults(resData.results.slice(0, 9));
                        setIsSearchLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    setIsSearchLoading(false);
                });
        } else {
            setSearchResults([]);
        }
    }, 500);

    const toggleSearchModal = () => toggleModal(prevState => !prevState)

    const onExploreBtnClick = (e) => {
        e.preventDefault();
        navigate(`/list/search?query=${searchTerm}`);
        toggleModal();
    }

    return (
        <div className='search-modal'>
            <div className='search-input-container'>
                <div className='search-modal-close-btn' onClick={ toggleSearchModal }>
                    <i className="bi bi-x"></i>
                    <p><small>Close Search</small></p>
                </div>
                <input 
                    autoFocus
                    className='search-input'
                    type="text"
                    placeholder="Search..." 
                    onChange={ (e) => fetchSearchResults(e.target.value) } >
                </input>
            </div>

            <SearchByGenre />

            <div className='search-modal-results'>
                <h2>Results</h2>
                <div className='search-modal-results-grid'>
                    {
                        (!isSearchLoading) ?
                            (searchResults.length !== 0 ? 
                                (
                                    searchResults.map(result => (
                                        <SearchResultCard toggleSearchModal={ toggleSearchModal } result={ result } key={ result.id }/>)
                                    )
                                ) :
                                (<p></p>)
                            ) :
                            ( <Spinner /> )
                    }
                </div>
                {
                    (!isSearchLoading && searchResults.length !== 0) && (
                        <button className='primary-btn' onClick={ onExploreBtnClick }>Explore More</button>
                    )
                }
            </div>
        </div>
    )
}

export default Search;
