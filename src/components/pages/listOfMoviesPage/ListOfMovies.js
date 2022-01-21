import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import Spinner from '../../shared/loadingSpinner/Spinner';
import './listOfMovies.css';
import MoviesGrid from '../../shared/moviesGrid/MoviesGrid';

const ListOfMovies = () => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [searchParams, ] = useSearchParams();
    const navigate = useNavigate();
    const params = useParams();
    const query = searchParams.get('query');
    const genreId = searchParams.get('genre_id');
    const genreName = searchParams.get('genre');

    const upperCaseWords = (string) => {
        const capitalise = (word) => word.charAt(0).toUpperCase() + word.slice(1);
        return string.split(' ').map(word => capitalise(word)).join(' ');
    }

    const urls = useMemo(() => ({
        trending: `${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
        "new releases": `${process.env.REACT_APP_API_BASE_URL}/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-GB&page=${page}`,
        search: `${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${query}&api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
        "top rated": `${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`,
        genre: `${process.env.REACT_APP_API_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&with_genres=${genreId}&page=${page}&sort_by=popularity.desc&include_adult=false`
    }), [genreId, page, query]);

    const fetchFreshData = useCallback(async () => {
        await fetch(urls[params.type])
                .then(res => {
                    if(!res.ok) {
                        throw new Error("Error Fetching Data. Response not OK");
                    }
                    return res.json()
                })
                .then(resData =>{
                        setResults(resData.results)
                        setIsLoading(false);
                })
                .catch(err => {
                    console.log(err)
                    setIsLoading(false);
                });
    }, [params.type, urls]);

    //run only when page state increases to add data to end of results state and not override
    useEffect(() => {
        console.log(page + " - increased. "+urls[params.type]);
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
    }, [page])

    //only run when a new list is being shown (remove state and start fresh)
    useEffect(() => {
        if(urls[params.type] === undefined) {
            navigate("*");
        }
        console.log('need fresh data');
        fetchFreshData();

    }, [params.type, navigate, query, genreId])

    const onMoreBtnClick = () => setPage(page+1);

    const getPageTitle = () => {
        //function to get the title based on url
        if(params.type !== 'search'){
            return upperCaseWords(params.type !== 'genre' ? params.type : `${params.type} - ${genreName}` );
        }
        return `Search for "${query}"`;
    }

    return (
        <div className='container'>
            {/* Show title if not from search term */}
            <h1 className='container-title'>{ getPageTitle() }</h1>
            {
                !isLoading ? (
                    <>
                        <MoviesGrid data={ results } />
                        <button className='primary-btn' onClick={ onMoreBtnClick }>More Results</button>
                    </>
                ) :
                <Spinner />
            }
        </div>
    )
}

export default ListOfMovies;
