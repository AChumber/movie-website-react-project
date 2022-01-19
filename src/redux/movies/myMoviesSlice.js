/*
Redux slice to save a global state of movies a user can save
*/
import { createSlice } from '@reduxjs/toolkit';

export const myMoviesSlice = createSlice({
    name: 'myMovies',
    initialState: {
        movies: []
    },
    reducers: {
        addMovie: (state, action) => {
            //add action.payload (movie object) to state
            state.movies.push(action.payload);
        },
        removeMovie: (state, action) => {
            //remove movie with matching id (from action.payload which contains movieId)
            state.movies = state.movies.filter(listItem => listItem.id !== action.payload);
        }
    }
});

export const { addMovie, removeMovie } = myMoviesSlice.actions;
export default myMoviesSlice.reducer;