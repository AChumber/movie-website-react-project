import React from 'react';
import { useNavigate } from 'react-router-dom';
import chevron from '../chevron.svg';
import './topRated.css';
import useFetch from '../../../../hooks/useFetch';
import MovieCard from '../../../shared/movieCard/MovieCard';
import Spinner from '../../../shared/loadingSpinner/Spinner';

const TopRated = () => {
    const navigate = useNavigate();
    const { data:topRatedMovies, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`)

    return (
        <section className='new-releases-section movie-list-section'>
            <div className='new-releases-decor movie-list-section-decor'></div>
            <div className='title' onClick={ () => navigate("/list/top%20rated") }>
                <h2 className='title-text'>Top Rated</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } alt='Explore more Top Rated Movies' /></p>
            </div>
            {
                !isLoading ? (
                    <div className='horizontal-movies-list'>
                        {topRatedMovies.results.slice(0, 10).map(movie => (
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

export default TopRated;
