import React, {useState} from 'react'
import Header from './header'
import axios from "axios";
import { API_END_POINT } from '../utils/constant'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { setUser,setisLoading} from '../redux/userSlice';


const Login = () => {
    const [isLogin,setIsLogin] = useState(false);
    const [fullName,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(store=>store.app.isLoading);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }
    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setisLoading(true));
        if(isLogin){
            //login
            const user = {email,password};
            try{
                const res = await axios.post(`${API_END_POINT}/login`,user,{
                    headers:{
                        'Content-Type':'application/json'
                    },
                    withCredentials:true
                });
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                dispatch(setUser(res.data))
                navigate('/browse');
            } catch (error){
                toast.error(error.response.data.message);
                console.log(error);
            }
            finally{
                dispatch(setisLoading(false))
            }
        }
        //register
        else{
            dispatch(setisLoading(true))
            const user = {fullName,email,password};
            try{
                const res = await axios.post(`${API_END_POINT}/register`,user);
                if(res.data.success){
                    toast.success(res.data.message);
                }
                setIsLogin(true);
            } catch(error){
                toast.error(error.response.data.message)
                console.log(error);
            }
            finally{
                dispatch(setisLoading(false))
            }
        } 
        setFullName("");
        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover'src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs' alt='Logo'></img>
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 py-2 my-36 mx-auto left-0 right-0 items-center justify-center absolute bg-black/90 rounded-md'>
                <h1 className='text-3xl text-white mb-5 font-bold '>{isLogin ? "Login" : "SignUp"}</h1>
                <div className='flex flex-col'>
                    {
                        !isLogin && <input type='text' value={fullName} onChange={(e)=>setFullName(e.target.value)} placeholder='Fullname' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    }
                    <input  value={email} onChange={(e)=>setEmail(e.target.value)}type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    <input  value={password} onChange={(e)=>setPassword(e.target.value)}type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                    <button type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(isLogin?"Login":"Signup")}`}</button> 
                    <p className='text-white mt-2 my-2' >{isLogin ?"Already have an account?" : "New to Netflix"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
                </div>

            </form>
        </div>
    )
}

export default Login