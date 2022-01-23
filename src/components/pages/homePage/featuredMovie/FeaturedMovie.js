import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrendingList, refreshPopularMovie } from '../../../../redux/movies/trendingMoviesSlice';
import Spinner from '../../../shared/loadingSpinner/Spinner';
import './featuredMovie.css';

const FeaturedMovie = () => {
    const { trendingList, popularMovie, isLoading } = useSelector(state => state.trendingMovies);
    const dispatch = useDispatch();

    useEffect(() => {
        if(trendingList.length === 0) {
            dispatch(fetchTrendingList());
        }
        dispatch(refreshPopularMovie());
    }, [dispatch, trendingList.length])

    return (
        <div className="featured-movie">
            {
                (!isLoading && popularMovie.title) ? (
                <>
                    <div className="featured-movie-bg-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${popularMovie.backdrop_path})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(3px)' 
                    }}></div>
                    <div className="featured-movie-details">
                        <div className='featured-movie-poster-container'>
                            <img className="featured-movie-poster" src={'https://image.tmdb.org/t/p/w400'+popularMovie.poster_path} alt={`${popularMovie.title} poster`} />
                        </div>
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
