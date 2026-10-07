import React from 'react';
import "../App.css";
import { Link, useNavigate } from 'react-router-dom';

 export default function landingPage() {

  const router = useNavigate();

  return (
    <div className='landingPageContainer'>
     <nav>

     <div className='navHeader'>
      <h2>WIRED</h2>
     </div>

     <div className='navList'>
      <p  onClick={() => {
        router("/rudra")
      }}>Join As Guest</p>
      <p  onClick={() => {
        router("/auth")
      }} >Register</p>
      <div onClick={() => {
        router("/auth")
      }} role='button'> 
        <p> Login </p>
      </div>
     </div>
         
     </nav>

     <div className="landingMainContainer">
      <div>
        <h1><span style={{color: "#be34ca"}}>Connect</span> with your loved ones</h1>

        <p>Cover a distance by Rudra's nextGen Meet</p>
        <div role='button'>
          <Link to={"/auth"}>Get Started</Link>
        </div>
      </div>
      <div>

       <video src="/lain_video.mp4" autoPlay loop muted></video>

      </div>
     </div>
     
    </div>
  )
}