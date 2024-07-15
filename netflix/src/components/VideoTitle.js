import React from 'react'
import { CiPlay1 } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
    return(
        <div className='w-[vw] absolute text-white pt-[18%] p-12'>
           <h1 className='test-3xl font-bold'>{title}</h1>
           {overview && <p className='w-1/3 pt-2 white-space: pre-wrap'>{overview}</p>}
           <div className='flex mt-8'> 
            <button className='flex item-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'>
                <CiPlay1 size="24px"/>
                <span className='ml-1'>Play</span>
            </button>
            <button className='flex item-center mx-2 px-6 py-2 bg-white text-black rounded-md bg-opacity-40 hover:bg-opacity-68'>
                <IoIosInformationCircleOutline size="24px"/>
                <span className='ml-1'>More Info</span>
            </button>
           </div>
        </div>
    )
}

export default VideoTitle