import React from "react";
import axios from "axios";
import { options } from "../utils/constant";
import { setTrailerMovie } from "../redux/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovieById = async (movieId) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getMovieById = async () => {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/videos`,
                    options
                );
                const trailer = res?.data?.results?.filter((item) => {
                    return item.type === "Trailer";
                });
                dispatch(
                    setTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0])
                );
            } catch (error) {
                console.log(error);
            }
        };
        getMovieById();
    }, []);
};

export default useMovieById;
