import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import MovieCard from '../../../shared/movieCard/MovieCard';

const RelatedMovies = ({ movieId }) => {
    const { data:relatedMovies, isLoading:isRelatedMoviesLoading } = useFetch(`${process.env.REACT_APP_API_BASE_URL}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&page=1`);

    return (
        <div className='single-movie-container'>
                <h2 className='extra-detail-title'>Related Movies</h2>
                <div className='horizontal-movies-list'>
                    { !isRelatedMoviesLoading && (
                        relatedMovies.results.slice(0, 10).map((movie, i) => <MovieCard key={i} movie={ movie } />)
                    ) }
                </div>
            </div>
    )
}

export default RelatedMovies
