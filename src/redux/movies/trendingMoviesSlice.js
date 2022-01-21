import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrendingList = createAsyncThunk(
    'trendingMovies/getTrendingList',
    async () => {
        //return the data fetched in this callback
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => data.results) 
            .catch(err => console.log(err));
    }
)

export const trendingMoviesSlice = createSlice({
    name: 'trendingMovies',
    initialState: {
        trendingList: [],
        popularMovie: {},
        isLoading: null
    },
    reducers: {
    },
    extraReducers: {
        [fetchTrendingList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchTrendingList.fulfilled]: (state, action) => {
            state.trendingList = action.payload;
            state.popularMovie = state.trendingList[Math.floor(Math.random() * state.trendingList.length)];
            state.isLoading = false;
        },
        [fetchTrendingList.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
});

export const { getPopularMovie } = trendingMoviesSlice.actions;
export default trendingMoviesSlice.reducer;
