import React from 'react';
import './movieCard.css';
import { getaverageRatingBackgroundColor } from '../functions/getAverageRatingBackgroundColor';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <div className='movie-card-container' onClick={ () => navigate(`/movie/${movie.id}`) }>
            <img className='movie-card-img' src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={`${ movie.title } poster`} loading='lazy' />
            <div className='movie-card-overlay'>
                <p className='movie-card-title'>{ movie.title }</p>
                <p className={`movie-card-rating ${getaverageRatingBackgroundColor(movie.vote_average)}`}>{ movie.vote_average }</p>
            </div>
        </div>
    )
}

export default MovieCard
