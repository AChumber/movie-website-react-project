import { createSlice } from '@reduxjs/toolkit';


export const topRatedMoviesSlice = createSlice({
    name: "topRatedMovies",
    initialState: {
        //accessed via state
        toprated: []
    },
    reducers: {
        addTopRatedMovies: (state, action) => {
            state.toprated = action.payload;
        }
    }
})

export const { addTopRatedMovies } = topRatedMoviesSlice.actions;
export default topRatedMoviesSlice.reducer;
