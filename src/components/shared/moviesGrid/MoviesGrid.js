import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import './moviesGrid.css';

const ResultGrid = ({ data, isAddToMyMovies = true }) => {
    return (
        <div className='results-grid-container'>
            {
                data.map(movie => (
                    <div className='results-grid-result-container'>
                        <MovieCard key={ movie.id } movie={ movie } isAddToMyMovies={ isAddToMyMovies } />
                    </div>
                ))
            }
        </div>
    )
}

export default ResultGrid
