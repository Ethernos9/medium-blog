
import AppBar from './AppBar'
import { Blog } from '../Hooks'
import { Avatar } from './BlogCard'


const BlogContent = ({blog}:{blog:Blog | null }) => {
  return (
    <div>
        <AppBar/>
    <div className='flex justify-center'>
     <div className='grid  px-10 w-full pt-12 max-w-screen-2xl'>
         <div className='col-span-8'> 
              <div className='text-4xl font-extrabold'>
                  {blog?.title}
              </div>
              <div className='text-slate-500 text-sm pt-2'>
                 Posted on 23rd Sept 2023
              </div>
         </div>
         <div className='pt-12 '>
               {blog?.content}
          </div>   
        </div>
         <div className='col-span-4 pt-12 '>
             <div className='text-slate-600 text-lg pt-12'>
               Author
             </div>

             <div className='flex w-full'>
                <div className='pr-2 flex flex-col justify-center'>
                     <Avatar name = {blog?.author.name || "User"} size='small'/> 
                </div>
                 <div>
                     <div className='text-xl pt-12 font-bold'>
                           {blog?.author.name || "User"}
                     </div>
                     <div className='pt-2 text-slate-500'>
                             Random catch phrase about the author's ability to grab the user's attention
                     </div>
                 </div>
             </div>
         </div>
        
      </div>
    </div>
  )
}

export default BlogContent