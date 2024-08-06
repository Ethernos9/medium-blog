import axios from "axios";
import { useEffect, useState } from "react";
import { BackendUrl } from "../config";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export interface Blog{
   "content":string,
   "title":string,
   "id":string,
   "author":{
    "name":string,
   }
}
export const useBlogs = ()=>{
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs] = useState<Blog[]>([])
    const token = localStorage.getItem("token")
    useEffect(()=>{
        axios.get( `${BackendUrl}/api/v1/blog/bulk`,{
            headers:{
                authorization:"bearer " + token
            }
        }).then(response=>{
             setBlogs(response.data.blogs)
             setLoading(false)
            
        })
    },[])
    return {
        loading,      
         blogs
    }
    
}

export const useBlog = ({id}:{id:string})=>{
     const [loading,setLoading] = useState(true);
     const [blog,setBlog] = useState<Blog|null>(null)
     const token = localStorage.getItem("token")

     useEffect(() => {
       axios.get(`http://127.0.0.1:8787/api/v1/blog/${id}`,{
        headers:{
            authorization:"bearer " + token
        }
       }).then(response=>{
        setBlog(response.data)
        setLoading(false)
       })
     
      
     }, [id])
     return{
        loading,
        blog
    } 
        
     
}