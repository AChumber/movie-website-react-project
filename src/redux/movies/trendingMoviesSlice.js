import { createSlice } from '@reduxjs/toolkit';

export const trendingMoviesSlice = createSlice({
    name: 'trendingMovies',
    initialState: {
        trending: []
    },
    reducers: {
        addTrendingMovies: (state, action) => {
            state.trending = action.payload;
        }
    }
});

export const { addTrendingMovies } = trendingMoviesSlice.actions;
export default trendingMoviesSlice.reducer;