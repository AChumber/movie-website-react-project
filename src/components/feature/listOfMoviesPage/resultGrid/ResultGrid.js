import React from 'react';
import MovieCard from '../../../shared/movieCard/MovieCard';
import './resultGrid.css';

const ResultGrid = ({ data }) => {
    return (
        <div className='results-grid-container'>
            {
                data.map(movie => <MovieCard key={ movie.id } movie={ movie } />)
            }
        </div>
    )
}

export default ResultGrid
