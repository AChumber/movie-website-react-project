import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTrendingList, refreshPopularMovie } from '../../../../redux/movies/trendingMoviesSlice';
import SkeletonFeatureMovie from '../../../../skeletons/skeletonFeatureMovie/SkeletonFeatureMovie';
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
        (!isLoading && popularMovie.hasOwnProperty('title')) ? (
            <>
            <div className='featured-movie-bg-img-container'>
                <img src={`https://image.tmdb.org/t/p/original${popularMovie.backdrop_path}`} alt='' />
            </div>
            <div className="featured-movie">
            {/* <div className="featured-movie-bg-img" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${popularMovie.backdrop_path})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                filter: 'blur(0px)' 
            }}></div> */}
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
                        </div>
                    </div>
                </div>
            </div>
        </>
        ) : (
            <div className="featured-movie">
                <SkeletonFeatureMovie />
            </div>
        )
    )
}

export default FeaturedMovie
