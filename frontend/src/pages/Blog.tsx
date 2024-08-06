import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useBlog } from '../Hooks';
import { useParams } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import AppBar from '../components/AppBar';
import { Skeleton } from '../components/Skeleton';
import Spinner from '../components/Spinner';


  const Blog = () => {
    const {id} = useParams();
    
    if (!id){
      return <div>Error: No blog ID provided!</div>;
    }


   const {loading,blog} = useBlog({id})

    if (loading){
       return<div>
        <AppBar />
        <div className='h-screen flex flex-col justify-center'>
           <div className='flex justify-center'>
           <Spinner/>
           </div>
       </div>
            
       </div>
    }

    if (!blog){
      return <div>Error!!!</div>
    }
  
    return (
     <div>
      <BlogContent blog={blog} />
       
     </div>
    )
  }
  
    
  

export default Blog