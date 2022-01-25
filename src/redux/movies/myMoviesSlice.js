/*
Redux slice to save a global state of movies a user can save
*/
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageMovies, putInLocalStorage } from '../../helpers/localStorageHelper';

//Custom middleware to save movies list to localstorage, Ran when an action is dispatched
export const localStorageMiddleware = store => next => action => {
    let result = null;
    if(addMovie.match(action) || removeMovie.match(action)) {
        result = next(action); //invoke next action to get up to date state from store variable
        putInLocalStorage(store.getState().myMovies.movies);
    }

    //always return to complete the dispatch of the action to the store
    return !result ? next(action) : result;
}

export const myMoviesSlice = createSlice({
    name: 'myMovies',
    initialState: {
        //check localstorage if movies list exist
        movies: (!getLocalStorageMovies()) ? [] : getLocalStorageMovies()
    },
    reducers: {
        addMovie: (state, action) => {
            //check if movie already is in state. evaluates to undefined if movie not in state thus saving to state
            if(state.movies.find(movie => movie.id === action.payload.id) === undefined) {
                //add action.payload (movie object) to state
                state.movies.push(action.payload);
            }
        },
        removeMovie: (state, action) => {
            //remove movie with matching id (from action.payload which contains movieId)
            state.movies = state.movies.filter(listItem => listItem.id !== action.payload);
        }
    }
});

export const { addMovie, removeMovie } = myMoviesSlice.actions;
export default myMoviesSlice.reducer;