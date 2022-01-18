import React from 'react';
import MovieCard from '../../../shared/movieCard/MovieCard';
import './resultGrid.css';

const ResultGrid = ({ data }) => {
    return (
        <div className='results-grid-container'>
            {
                data.map(movie => (
                    <div className='results-grid-result-container'>
                        <MovieCard key={ movie.id } movie={ movie } />
                    </div>
                ))
            }
        </div>
    )
}

export default ResultGrid
