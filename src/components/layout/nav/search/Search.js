import React, { useState } from 'react';
import { debounce } from 'lodash';
import './search.css';
import Spinner from '../../../shared/loadingSpinner/Spinner';
import SearchResultCard from '../searchResultCard/SearchResultCard';

const Search = ({ toggleModal }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [isSearchLoading, setIsSearchLoading] = useState(false);

    const fetchSearchResults = debounce(async (searchTerm) => {
        if(searchTerm !== ''){
            setIsSearchLoading(true);
            console.log(searchTerm);
            await fetch(`${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${searchTerm}&api_key=${process.env.REACT_APP_API_KEY}`)
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Error fetching query results. Response not OK");
                    }
                    return res.json()
                })
                .then(resData =>{
                        setSearchResults(resData.results.slice(0, 15));
                        setIsSearchLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    setIsSearchLoading(false);
                });
        }
    }, 500);

    const toggleSearchModal = () => toggleModal(prevState => !prevState)

    return (
        <div className='search-modal'>
            <div className='search-input-container'>
                <div className='search-modal-close-btn' onClick={ toggleSearchModal }>
                    <i className="bi bi-x"></i>
                    <p><small>Close Search</small></p>
                </div>
                <input 
                    className='search-input'
                    type="text"
                    placeholder="Search..." 
                    onChange={ (e) => fetchSearchResults(e.target.value) } >
                </input>
            </div>

            <div className='search-modal-results'>
                <h2>Results</h2>
                <div className='search-modal-results-grid'>
                    {
                        (!isSearchLoading) ?
                            (searchResults !== [] ? 
                                ( searchResults.map(result => <SearchResultCard toggleSearchModal={ toggleSearchModal } result={ result } key={ result.id }/>) ) :
                                (<p>No Results could be found</p>)
                            ) :
                            ( <Spinner /> )
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;
