import { createSlice } from '@reduxjs/toolkit';

export const popularMovieSlice = createSlice({
    name: 'popularMovie',
    initialState: {
        movie: {}
    },
    reducers: {
        addPopularMovie: (state, action) => {
            //replace state with action payload (object) of newly fetched data
            state.movie = action.payload;
        },
    }
});

export const { addPopularMovie } = popularMovieSlice.actions;
export default popularMovieSlice.reducer;