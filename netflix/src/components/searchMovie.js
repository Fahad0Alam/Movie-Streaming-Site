import axios from "axios";
import React, { useState,useEffect } from "react";
import { options, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import { setisLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((store) => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector(
        (store) => store.searchMovie
    );
    useEffect(() => {
        if (searchedMovie && searchedMovie.length > 0) {
            setHasSearched(true);
        }
    }, [searchedMovie]);

    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setisLoading(true));
        try {
            const res = await axios.get(
                `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
                options
            );
            const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setisLoading(false));
        }
        setSearchMovie("");
    }

    return (
        <>
            <div className="flex justify-center pt-[10%] w-[100%]">
                <form onSubmit={submitHandler} className="w-[50%]">
                    <div className="flex justify-between shadow-md border-2 border-gray-200 rounded-lg w-[100%]">
                        <input
                            value={searchMovie}
                            onChange={(e) => { setSearchMovie(e.target.value) }}
                            className="w-full outline-none rounded-md text-lg p-2"
                            type="text"
                            placeholder='Search Movies.....'
                        />
                        <button
                            className="bg-red-800 text-white rounded-md px-4 py-2"
                        >
                            {isLoading ? "loading...." : "Search"}
                        </button>
                    </div>
                </form>
            </div>
            {
                hasSearched ? (
                    searchedMovie && searchedMovie.length > 0 ? (
                        <MovieList title={movieName} searchMovie={true} movies={searchedMovie} />
                    ) : (
                        <h1>Movie Not Found</h1>
                    )
                ) : null
            }
        </>
    )
}

export default SearchMovie;
