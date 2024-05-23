import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../App.css";
import pic1 from '../Pics/149-1491635_career-counsellor-icon-in-transparent-removebg-preview.png'
import { useAuth } from "./Auth";
export default function Navbar() {
  const auth=useAuth()
  const navigate=useNavigate()
  const out=()=>{
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <div className="navhead gothic-a1-regular">
        <div className="subdiv1">
          <img src={pic1} alt="none" style={{height:'50px'}}/>
        </div>
        <div className="subdiv2">
         {auth.user && <NavLink to="guidance">Career Guidance</NavLink>}
          <NavLink to="test">Take Test</NavLink>
          <NavLink to="contact">Contact</NavLink>
          <NavLink to="blog">Blog</NavLink>
          <NavLink to="about">About us</NavLink>
        </div>
        <div className="subdiv3">
       {!auth.user &&  <NavLink to='signin'> <button className='log' >Login</button></NavLink>} 
       {!auth.user && <NavLink to='signup'> <button className='logs' >Register</button></NavLink>}    
         {auth.user && <i class="ri-logout-circle-line but" onClick={out}><span class="tooltiptext">Log out</span></i>}
        </div>
      </div>
    </div>
  );
}
