import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector,useDispatch} from "react-redux";
import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {setUser} from '../redux/userSlice.js';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/movieSlice.js';

const Header = () => {
    const {name} = useSelector((store)=>store.app);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toggle = useSelector(store=>store.movie.toggle);

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/logout`);
            if(res.data.success){
                toast.success(res.data.message);
            }
            navigate("/");
            dispatch(setUser(null));
        } catch (error) {
            console.log(error);
        }
    }

    const toggleHandler = () => {
        dispatch(setToggle());
    }

    return (
        <div className='absolute z-10 flex w-[100%] pr-3 mt-0 pt-[-20] pb-0 justify-between bg-gradient-to-b from-black'>
            <img className='w-56 pl-[-24]' src='https://pngimg.com/uploads/netflix/small/netflix_PNG31.png' alt='Netflix Logo'/>
            {
                name && (
                    <div className='flex items-center'>
                    <IoMdArrowDropdown className='text-white'/>
                    <h1 className='text-lg font-medium text-white'>{name}</h1>
                    <div className='ml-4'>
                        <button onClick={logoutHandler}className='bg-red-800 text-white px-4 py-2' >Logout</button>
                        <button onClick={toggleHandler}className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? "Home" :"Search Movie"}</button>
                    </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header