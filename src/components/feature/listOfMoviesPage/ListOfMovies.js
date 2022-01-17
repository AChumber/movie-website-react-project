import React, { useState } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Spinner from '../../shared/loadingSpinner/Spinner';
import './listOfMovies.css';
import useFetch from '../../../hooks/useFetch';
import ResultGrid from './resultGrid/ResultGrid';

const ListOfMovies = () => {
    const [page, setPage] = useState(1);
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();
    const query = searchParams.get('query');
    const urls = {
        trending: `${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
        "new releases": `${process.env.REACT_APP_API_BASE_URL}/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`,
        search: `${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
        "top rated": `${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    }


    if(urls[params.type] === undefined) {
        navigate("*");
    }
    const { data, isLoading } = useFetch(urls[params.type]);

    const upperCaseWords = (string) => {
        const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);
        return string.split(' ').map(word => capitalise(word)).join(' ');
    }


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
                        {console.log(data)}
                        <ResultGrid data={ data.results } />
                    </>
                ) :
                <Spinner />
            }
        </div>
    )
}

export default ListOfMovies;
