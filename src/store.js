import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesSlice from './redux/movies/trendingMoviesSlice';
import myMoviesReducer from './redux/movies/myMoviesSlice';
import genresSlice from './redux/movies/genresSlice';

const store = configureStore({
    reducer: {
        genres: genresSlice,
        myMovies: myMoviesReducer,
        trendingMovies: trendingMoviesSlice,
    }
});

export default store;