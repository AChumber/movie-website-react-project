import { configureStore } from '@reduxjs/toolkit';
import popularMovieReducer from './redux/movies/popularMovieSlice';
import trendingMoviesSlice from './redux/movies/trendingMoviesSlice';
import topRatedMoviesSlice from './redux/movies/topRatedMoviesSlice';

const store = configureStore({
    reducer: {
        popularMovie: popularMovieReducer,
        trendingMovies: trendingMoviesSlice,
        topRatedMovies: topRatedMoviesSlice
    }
});

export default store;