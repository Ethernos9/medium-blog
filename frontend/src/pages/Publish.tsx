import { ChangeEvent, useState } from 'react'
import AppBar from '../components/AppBar'
import axios from 'axios'
import { BackendUrl } from '../config'
import { useNavigate } from 'react-router-dom'


const Publish = () => {
    const[title,setTitle]   = useState("")
    const[content,setContent]   = useState("")
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const createPost = async()=>{
       await axios.post(`${BackendUrl}/api/v1/blog`,{
            title,
            content,
       },{
         headers:{
             authorization : "Bearer "+ token
         }
       })
       navigate('/blogs')
    }
      
  return (
    <div>
        <AppBar/>
        <div className='flex justify-center w-full pt-8'>
          <div className='max-w-screen-lg w-full'>
            <input onChange={(e)=>{
                setTitle(e.target.value)
            }} type="text" className='w-full bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block-w-full p-2.5' placeholder='Title' />
             <TextEditor onChange= {(e)=>{
                setContent(e.target.value)
             }}/> 

      <button onClick={createPost} type = "submit" className='mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'>
           Publish Post
       </button>
          </div>
        </div>
    </div>
  )
}


function TextEditor ({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}){
   return <div>
    <div className='w-full mb-4 mt-4'>
        <div className='flex items-center justify-between border '>
             <div className=' bg-white rounded-b-lg w-full'>
               <label className='sr-only'>
                    Publish post
               </label>
               <textarea  onChange = {onChange}id="editor" rows = {8} className='rounded focus:outline-none block w-full px-2 py-1 text-sm text-gray-800 bg-white ' placeholder='Write an article...' required/>   
             </div>
        </div>
         
      
    </div>
   </div>
}

export default Publish