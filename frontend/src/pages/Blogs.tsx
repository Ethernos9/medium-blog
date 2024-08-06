 import React from 'react'
import { BlogCard } from '../components/BlogCard'
import AppBar from '../components/AppBar'
import { useBlogs } from '../Hooks'
import { Skeleton } from '../components/Skeleton'
 
 const Blogs = () => {
       const {loading,blogs} = useBlogs()
       if (loading){
          return <div className='pt-40 pl-80'>
               <Skeleton/>
               <Skeleton/>
               <Skeleton/>
          </div>
       }
   return (
  <div>
        <AppBar/>         
    
      <div className='flex justify-center'>
           <div>
              {blogs?.map(blog=><BlogCard
                       id = {blog.id}
                       authorName={blog.author.name || "User"}
                       title={blog.title}
                       content={blog.content}
                       publishDate={"2nd Feb 2024"}
                        
              />)}
            
         
     </div>
      </div>
   </div>
   )
 }
 
 export default Blogs