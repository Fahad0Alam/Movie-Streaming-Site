import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        popular_movies: null,
        top_rated_movies: null,
        upcoming_movies: null,
        toggle: false,
        trailerMovie: null,
        open: false,
        id: "",
    },
    reducers: {
        getNowPlayingMovies: (state, action) => {
            state.getNowPlayingMovies = action.payload;
        },
        getPopularMovies: (state, action) => {
            state.getPopularMovies = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.getTopRatedMovies = action.payload;
        },
        getUpcomingMovies: (state, action) => {
            state.getUpcomingMovies = action.payload;
        },
        setToggle: (state) => {
            state.toggle = !state.toggle
        },
        setTrailerMovie: (state, action) => {
            state.trailerMovie = action.payload;
        },
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        getId: (state, action) => {
            if (action.payload !== undefined) {
                state.id = action.payload;
            } else {
                console.error("Received undefined ID in reducer");
            }
        }

    }
});

export const { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpcomingMovies, setToggle, setTrailerMovie, setOpen, getId } = movieSlice.actions;
export default movieSlice.reducer;