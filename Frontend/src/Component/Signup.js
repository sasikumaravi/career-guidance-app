import React, { useState } from 'react'
import axios from "axios";
import './style.css'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const[password,setPassword]=useState('')
    const[dob,setDob]=useState('')
    const[education,setEducation]=useState('')
    const navigate=useNavigate()
    const handleSubmit=()=>{
        axios.post(`http://localhost:3001/users/post`,{name,mail,password,dob,education})
        .then(navigate('/guidance'))
        .catch(err=>alert('error'))
        
    }
  return (
    <div>
        <form className='form-up' onSubmit={handleSubmit}>
            <h1>Sign up page</h1>
            <label>Username</label>
            <input type='text' onChange={(e)=>{setName(e.target.value)}}/><br></br>
            <label>Email</label>
            <input type='email'onChange={(e)=>{setMail(e.target.value)}}/><br></br>
            <label>Password</label>
            <input type='password' onChange={(e)=>{setPassword(e.target.value)}}/><br></br>
            <label>DoB</label>
            <input type='date' onChange={(e)=>{setDob(e.target.value)}}/><br></br>
            <label>Qualification</label>
            <select onChange={(e)=>setEducation(e.target.value)}>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="9th">College-UG</option>
                <option value="9th">College-PG</option>
            </select> <br></br>
            <button type='submit'>Sign up</button>
        </form>
    </div>
  )
}