import React from 'react';
import { useSelector } from 'react-redux';
import MoviesGrid from '../../shared/moviesGrid/MoviesGrid';

const MyMovies = () => {
    const myMovies = useSelector(state => state.myMovies.movies);

    return(
        <div className='container'>
            <h1 className='container-title'>My Movies</h1>
                {
                    myMovies.length === 0 ?
                        <p>No Movies in list. Find your favourite movies to add them!</p> :
                        (
                            //Add ResultsGrid wrapped in CSSTransition to animate exit of movie card
                            <MoviesGrid data={ myMovies } isAddToMyMovies={ false } />
                        )
                }
        </div>
    )
};

export default MyMovies;
