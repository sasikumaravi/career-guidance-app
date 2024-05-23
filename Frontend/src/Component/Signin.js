import React, {  useEffect, useState } from 'react'
import axios from 'axios'
import './style.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Auth';

export default function Signin() {
    const [email, setEMail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const[list,setList]=useState()
    const auth = useAuth()
    useEffect(()=>{
        axios.get("http://localhost:3001/users/get")
        .then(res=>{setList(res.data)})
        .catch(err=>alert("some error bro"))
    },[])
    const check=(e)=>{
        
        const user=list.find(x=>x.mail===email)
        if(user){
            if(user.password===password){
                auth.login(user.name)
                navigate('/guidance')
                
            }
            else{
                alert('wrong password bro...')
            }
        }
        else{
            alert('incorrect mail bro...')
        }
        e.preventDefault()
      }

return (
    <div className='abc-in'>
        <form className='bcd-in' onSubmit={check}>
            <h1>Login page</h1>
            <label>Email</label>
            <input type='email' onChange={(e) => {
                setEMail(e.target.value)
            }} /><br></br>
            <label>Password</label>
            <input type='password' onChange={(e) => {
                setPassword(e.target.value)
            }} /><br></br>
            <button className='log' type='submit'>Log in</button>
        </form><br></br>

    </div>
)
}
