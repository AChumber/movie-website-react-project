import React from 'react';
import './movieCard.css';

const MovieCard = ({ movie }) => {
    return (
        <div className='movie-card-container'>
            <img className='movie-card-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${ movie.title } poster`} loading='lazy' />
            <div className='movie-card-overlay'>
                <p className='movie-card-title'>{ movie.title }</p>
                <p className='movie-card-rating'>{ movie.vote_average }</p>
            </div>
        </div>
    )
}

export default MovieCard
