//A horizontal list of movie cards which display details on hover. 
//Get list from movieDB API and store in redux slice as may use in other components down the tree (like recommendations)
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './trendingMovies.css';
import MovieCard from '../../../shared/movieCard/MovieCard';
import chevron from '../chevron.svg';
import Spinner from '../../../shared/loadingSpinner/Spinner';

const TrendingMovies = () => {
    const { trendingList, isLoading } = useSelector(state => state.trendingMovies);
    const navigate = useNavigate();

    return (
        <section className='trending-movies-section movie-list-section' id='#trending'>
            <div className='trending-movies-decor movie-list-section-decor'></div>
            <div className='title' onClick={ () => navigate('/list/trending') }>
                <h2 className='title-text'>Trending Movies</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } alt='Explore more Trending Movies' /></p>
            </div>
            {
                !isLoading ? (
                    <div className='horizontal-movies-list'>
                        {trendingList.slice(0, 10).map(movie => (
                            <div className='horizontal-movies-list-movie-container' key={ movie.id }>
                                <MovieCard movie={ movie } />
                            </div>
                        ))}
                    </div>
                ) : (
                    <Spinner />
                )
            }
        </section>
    )
}

export default TrendingMovies