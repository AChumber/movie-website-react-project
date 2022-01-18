import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Spinner from '../../shared/loadingSpinner/Spinner';
import './listOfMovies.css';
import ResultGrid from './resultGrid/ResultGrid';

const ListOfMovies = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();
    const query = searchParams.get('query');

    const upperCaseWords = (string) => {
        const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);
        return string.split(' ').map(word => capitalise(word)).join(' ');
    }

    useEffect(() => {
        const urls = {
            trending: `${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
            "new releases": `${process.env.REACT_APP_API_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-GB&page=${page}`,
            search: `${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
            "top rated": `${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
        }

        if(urls[params.type] === undefined) {
            navigate("*");
        }

        (async() => {
            await fetch(urls[params.type])
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Error Fetching Data. Response not OK");
                    }
                    return res.json()
                })
                .then(resData =>{
                        setResults(prevState => [...prevState, ...resData.results])
                        setIsLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false);
                });
        })()
    }, [page, params.type, navigate, query])

    const onMoreBtnClick = () => setPage(page+1);

    return (
        <div className='container'>
            {/* Show title if not from search term */}
            <h1 className='container-title'>{ 
                params.type !== "search" ?
                    upperCaseWords(params.type) :
                    `Search for "${query}"`
            }</h1>
            {
                !isLoading ? (
                    <>
                        {console.log(results)}
                        <ResultGrid data={ results } />
                        <button className='primary-btn' onClick={ onMoreBtnClick }>More Results</button>
                    </>
                ) :
                <Spinner />
            }
        </div>
    )
}

export default ListOfMovies;
