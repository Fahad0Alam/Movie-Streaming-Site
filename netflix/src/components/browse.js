import React,{useEffect} from 'react'
import Header from './header'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import axios from 'axios';
import { Now_Playing_Movies, options } from '../utils/constant';
import { getNowPlayingMovies } from '../redux/movieSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './searchMovie';

const Browse = () => {
    const {email} = useSelector(store=> store.app)
    const navigate = useNavigate();
    const toggle = useSelector(store => store.movie.toggle);

    //custom hooks
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    
    useEffect(() => {
        if (!email) {
            navigate("/");
        }
    }, []);
    return (
        <div>
            <Header/>
            <div>
                {
                    toggle ? <SearchMovie/> : (
                        <>
                            <MainContainer/>
                            <MovieContainer/>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Browse