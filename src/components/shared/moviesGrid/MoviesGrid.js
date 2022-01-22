import React from 'react';
import MovieCard from '../movieCard/MovieCard';
import './moviesGrid.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ResultGrid = ({ data, isAddToMyMovies = true }) => {
    return (
        <div className='results-grid-container'>
            <TransitionGroup component={null}>
            {
                data.map(movie => (
                    <CSSTransition key={ movie.id } timeout={300} classNames='result-transition'>
                        <div className='results-grid-result-container'>
                            <MovieCard movie={ movie } isAddToMyMovies={ isAddToMyMovies } />
                        </div>
                    </CSSTransition>
                ))
            }
            </TransitionGroup>
        </div>
    )
}

export default ResultGrid
