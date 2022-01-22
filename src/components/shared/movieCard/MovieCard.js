import React, { useEffect, useState } from 'react';
import './movieCard.css';
import { getaverageRatingBackgroundColor } from '../../../helpers/getAverageRatingBackgroundColor';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovie, removeMovie } from '../../../redux/movies/myMoviesSlice';
import { PositiveFeedbackToast } from '../toast/Toast';

const MovieCard = ({ movie, isAddToMyMovies = true }) => {
    const [isShowToast, setIsShowToast] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = null;
        //change state only if true to remove toast after 5 seconds
        if(isShowToast) {
            timer = setTimeout(() => {
                setIsShowToast(false);
            }, 10000);
        }

        //cleanup remove timer is not null
        return () => {
            if(timer !== null) {
                clearTimeout(timer);
            }
        }
    }, [isShowToast])

    const onAddMovieBtnClick = () => {
        //dispatch and create a toast to show the action has been done
        dispatch(addMovie(movie));
        setIsShowToast(prevState => !prevState);
    }

    const onRemoveMovieBtnClick = () => {
        //dispatch remove movie and toast to show action has been done
        dispatch(removeMovie(movie.id));
    }

    const navigate = useNavigate();
    return (
        <div className='movie-card-container'>
            <div className='movie-card-navigator' onClick={ () => navigate(`/movie/${movie.id}`) }></div>
            <img className='movie-card-img' 
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} 
                alt={`${ movie.title } poster`} 
                loading='lazy' />
            <div className='movie-card-overlay'>
                <p className='movie-card-title'>{ movie.title }</p>
                <p className={`movie-card-rating ${getaverageRatingBackgroundColor(movie.vote_average)}`}>{ movie.vote_average }</p>
            </div>
            <button className='movie-card-add-btn'
                onClick={ isAddToMyMovies ? onAddMovieBtnClick : onRemoveMovieBtnClick }>
                    {`${ isAddToMyMovies ? 'Add to': 'Remove From' } My Movies`}
            </button>

            { isShowToast && (
                <PositiveFeedbackToast>Movie Added to your list</PositiveFeedbackToast>
            ) 
            
            }
        </div>
    )
}

export default MovieCard
