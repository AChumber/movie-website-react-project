import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './horizontalMoviesList.css';

const HorizontalMoviesList = ({ list, isAddToMyMovies = true }) => {
    return (
        <div className='horizontal-movies-list'>
                <TransitionGroup component={null}>
                {list.map(movie => (
                    <CSSTransition key={ movie.id } timeout={900} classNames='horizontal-movies-list-transition'>
                        <div className='horizontal-movies-list-movie-container'>
                            <MovieCard movie={ movie } isAddToMyMovies={ isAddToMyMovies } />
                        </div>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    )
};

export default HorizontalMoviesList;
