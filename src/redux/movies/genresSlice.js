import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGenresList = createAsyncThunk(
    'genres/getGenresList',
    async () => {
        //return the data fetched in this callback
        return await fetch(`${process.env.REACT_APP_API_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(data => data.genres) //get the 'genres' list from the data object
            .catch(err => console.log(err));
    }
)

const genresSlice = createSlice({
    name: 'genres',
    initialState: {
        genresList: [],
        isLoading: null
    },
    extraReducers: {
        [fetchGenresList.pending]: (state, action) => {
            state.isLoading = true;
        },
        [fetchGenresList.fulfilled]: (state, action) => {
            //result of getGenresList is fetched data which gets passed via action.payload
            state.genresList = (action.payload);
            state.isLoading = false;
        },
        [fetchGenresList.rejected]: (state, action) => {
            state.isLoading = false;
        }
    }
});

export default genresSlice.reducer;