import React from "react";
import {TMDB_IMG_URL}  from "../utils/constant.js";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice.js";

const MovieCart = ({posterPath,movieId}) => {
    const dispatch = useDispatch();
    if(posterPath === null) return null;

    const handleOpen = () => {
        dispatch(getId(movieId));
        dispatch(setOpen(true));
    }

    return (
       <div className="w-48 p-1" onClick={handleOpen}>
        <img src={`${TMDB_IMG_URL}/${posterPath}`} alt='Movie Banner'/>
       </div>
    )
};

export default MovieCart;