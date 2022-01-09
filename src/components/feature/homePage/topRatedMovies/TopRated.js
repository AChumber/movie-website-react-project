import React from 'react';
import chevron from '../chevron.svg';
import './topRated.css';
import useFetch from '../../../../hooks/useFetch';
import MovieCard from '../../../shared/movieCard/MovieCard';
import Spinner from '../../../shared/loadingSpinner/Spinner';

const NewReleases = () => {
    const { data:topRatedMovies, isLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&page=1`)

    return (
        <section className='new-releases-section movie-list-section'>
            <div className='new-releases-decor movie-list-section-decor'></div>
            <div className='title'>
                <h2 className='title-text'>Top Rated</h2>
                <p className='title-extra-text'>- Explore More <img className='title-chevron' src={ chevron } alt='Explore more Top Rated Movies' /></p>
            </div>
            {
                !isLoading ? (
                    <div className='horizontal-movies-list'>
                        {topRatedMovies.results.slice(0, 10).map(movie => <MovieCard key={ movie.id } movie={ movie } />)}
                    </div>
                ) : (
                    <Spinner />
                )
            }
        </section>
    )
}

export default NewReleases
