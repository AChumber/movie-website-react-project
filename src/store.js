import { configureStore } from '@reduxjs/toolkit';
import trendingMoviesSlice from './redux/movies/trendingMoviesSlice';
import myMoviesReducer, { localStorageMiddleware } from './redux/movies/myMoviesSlice';
import genresSlice from './redux/movies/genresSlice';

const store = configureStore({
    reducer: {
        genres: genresSlice,
        myMovies: myMoviesReducer,
        trendingMovies: trendingMoviesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
});

export default store;