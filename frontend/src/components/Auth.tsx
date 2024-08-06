import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Labelnput from './Labelnput'
import { signupInput, signupInputFinal } from '@ethernos/medium-common'
import axios from 'axios'
import { BackendUrl } from '../config'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const Auth = ({type}:{type:"Signup"|"Signin"}) => { 
  const navigate = useNavigate()
    const [postInputs,setPostInput] = useState<signupInputFinal>({
        userName:"",
        email:"",
        password:""
    })
     

   async function sendRequest(){
    try {
      const res = await axios.post(`${BackendUrl}/api/v1/user/${type==="Signup"?"signup":"signin"}`,
        postInputs
      )
       
        const token = res.data.token
        localStorage.setItem("token",token)
        navigate("/blogs")
       
      
    } catch (error:any) {
       
    function Notify (){
    toast(error.response.data.msg);
    }
    
    Notify()
      //  alert("Error while signing up: " + error.response.data.msg)

    }
    }
  return (
    <div className='h-screen flex justify-center flex-col'>
    <ToastContainer/>
      <div className='flex justify-center' >
        <div> 
          <div>
           <div className='text-3xl font-extrabold '>
            {type ==="Signup" ? " Create an account" : "Login In to your account"}
             
            </div>
            <div className='text-slate-400 pt-1 pl-3'>
              {type === "Signup" ? "Already have an account?"  :"Don't have an account?!!"}
              
                <Link to={type ==="Signup"? "/signin":"/signup"} className= "pl-2 underline">
                    {type === "Signup" ? "Login":"Create account"}
                </Link>
                
            </div>
            <div>
              {type === "Signup" ?  
                      <Labelnput  type ={"text"} label= "Name" placeholder='John Doe...' onChange={(e)=>{
                        setPostInput({
                         ...postInputs,
                         userName:e.target.value,
                         
 
                        }
                        )
                 }} />
              : ""
              }
              
              
                <Labelnput  type ={"text"} label= "Email" placeholder='John@gmail.com' onChange={(e)=>{
                       setPostInput({
                        ...postInputs,
                        email:e.target.value,
                        

                       }
                       )
                }} />
                <Labelnput  type = {"password"} label= "Password" placeholder='.........' onChange={(e)=>{
                       setPostInput({
                        ...postInputs,
                        password:e.target.value
                        
 
                       }
                       )
                }} />
                <button type = "button" onClick= {sendRequest}className='w-full text-white mt-6  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700  '> {type} </button>
            </div>
               
        </div>
      </div>
          
      </div>
    </div>
  )
}

export default Auth