import { configureStore } from '@reduxjs/toolkit';
import popularMovieReducer from './redux/movies/popularMovieSlice';
import trendingMoviesSlice from './redux/movies/trendingMoviesSlice';
import topRatedMoviesSlice from './redux/movies/topRatedMoviesSlice';
import myMoviesReducer from './redux/movies/myMoviesSlice';

const store = configureStore({
    reducer: {
        myMovies: myMoviesReducer,
        popularMovie: popularMovieReducer,
        trendingMovies: trendingMoviesSlice,
        topRatedMovies: topRatedMoviesSlice
    }
});

export default store;