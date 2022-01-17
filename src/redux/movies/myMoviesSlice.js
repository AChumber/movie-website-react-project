/*
Redux slice to save a global state of movies a user can save
*/
import { createSlice } from '@reduxjs/toolkit';

export const myMoviesSlice = createSlice({
    name: 'myMovies',
    initialState: [],
    reducers: {
        addMovie: (state, action) => {
            //add action.payload (movie object) to state
        },
        removeMovie: (state, action) => {
            //remove movie with matching id (from action.payload which contains movieId)
        }
    }
});

export const { addMovie, removeMovie } = myMoviesSlice.actions;
export default myMoviesSlice.reducer;