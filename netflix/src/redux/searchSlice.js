import {createSlice} from "@reduxjs/toolkit";
import SearchMovie from "../components/searchMovie";

const searchSlice = createSlice({
    name:"search",
    initialState :{
        movieName:null,
        searchedMovie:null
    },
    reducers:{
        setSearchMovieDetails:(state,action) => {
            const {searchMovie,movies} = action.payload;
            state.movieName = searchMovie;
            state.searchedMovie = movies;
        },
        setMovieName:(state,action) => {
            state.movieName = action.payload;
        },
        setSearchedMovie:(state,action) => {
            state.searchedMovie = action.payload;
        }
    }
});

export const {setSearchMovieDetails} = searchSlice.actions;
export default searchSlice.reducer;

