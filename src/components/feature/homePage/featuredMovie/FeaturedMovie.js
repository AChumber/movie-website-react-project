import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../../hooks/useFetch';
import { addPopularMovie } from '../../../../redux/movies/popularMovieSlice';
import { addTrendingMovies } from '../../../../redux/movies/trendingMoviesSlice';
import Spinner from '../../../shared/loadingSpinner/Spinner';
import './featuredMovie.css';

const FeaturedMovie = () => {
    const [isLoading, setIsLoading] = useState(true);
    const popularMovie = useSelector((state) => state.popularMovie.movie);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchPopularMovie = async () => {
        //Fetch data from endpoint and dispatch action addPopularMovie with payload of movie object
        await fetch(`${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(data => data.json())
            .then(res => {
                const movieIndex = Math.floor(Math.random() * res.results.length);
                dispatch(addPopularMovie(res.results[movieIndex]));
                dispatch(addTrendingMovies(res.results));
                setIsLoading(false);
            })
            .catch(e => console.log("Error Fetching Results - "+e));
        }

        fetchPopularMovie();
    }, [dispatch])

    return (
        <div className="featured-movie">
            {
                !isLoading ? (
                <>
                    <div className="featured-movie-bg-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${popularMovie.backdrop_path})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(3px)' 
                    }}></div>
                    <div className="featured-movie-details">
                        <img className="featured-movie-poster" src={'https://image.tmdb.org/t/p/w400'+popularMovie.poster_path} />
                        <div className="featured-movie-card">
                            <div className="featured-movie-text">
                                <h1><b>{ popularMovie.title }</b></h1>
                                <p>{ popularMovie.overview }</p>
                            </div>
                            <div className="featured-movie-btns">
                                <Link to={`/movie/${popularMovie.id}`} className="featured-cta">Explore Movie</Link>
                                <a href="#" className="featured-info">Find where to watch</a>
                            </div>
                        </div>
                    </div>
                </>
                ) : (
                    <Spinner />
                )
            }
        </div>
    )
}

export default FeaturedMovie
