import React from 'react';
import MovieList from './MovieList.js';
import { useSelector } from 'react-redux';

const MovieContainer = () => {
    const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies,getUpcomingMovies} = useSelector(store=>store.movie);
    return(
        <div className='bg-black text-white'>
            <div className='-mt-52 relative z-10'>
                <MovieList title = {"Popular Movie"} movies={getPopularMovies}/>
                <MovieList title = {"Top Rated Movie"} movies={getTopRatedMovies}/>
                <MovieList title = {"Now Playing Movies"} movies={getNowPlayingMovies}/>
                <MovieList title = {"Upcoming Movie"} movies={getUpcomingMovies}/>
            </div>
        </div>
    )
}

export default MovieContainer;