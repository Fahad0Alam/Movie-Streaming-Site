import React from "react";
import MovieCart from "./MovieCart.js";

const MovieList = ({title,movies,searchMovie=false}) => {
    if (!movies || movies.length === 0) {
        return null;
    }
    return (
        <div className="px-3">
            <h1 className={`${searchMovie ? "text-black" : "text-white"}text-3xl py-1`}>{title}</h1>
            <div>
                <div className='flex'>
                    {
                        movies.map((movie) => {
                            return (
                                <MovieCart key={movie.id} movie={movie} posterPath={movie.poster_path} movieId={movie.id}/>
                            )
                        })
                    }
               </div>
            </div>
    
        </div>
    )
};

export default MovieList;