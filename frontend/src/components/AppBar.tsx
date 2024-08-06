import React from 'react'
import { Avatar } from './BlogCard'
import { Link } from 'react-router-dom'

const AppBar = () => {
  return  <div className='border-b flex justify-between px-10 py-4'>
           <Link to = "/" className='flex flex-col justify-center cursor-pointer'>
                Medium 
           </Link>
          
       <div>
        <Link to ={`/publish`}>
        <button type='button' className='mr-4 text-white bg-green-700 hover:bg-greeb-800 focus:outline-none focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-enter me-2 mb-4'>
           Publish
        </button>
        </Link>
      
     
            <Avatar name= "Ethernos" size={"big"}/>

        </div>
    </div>
  
}

export default AppBar