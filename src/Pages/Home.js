import React from 'react'
// import './style.css'
import './Scss/Home.scss'
import {FaFacebookSquare} from "react-icons";
import heroimg from "../Assets/Images/hero_img.jpg";

const Home = () => {
    return ( 
        <>
      <div className="Home">
     <div className="container">

        <div className="left">
        <h1>
            <span>Hi, I am  </span>
            <br />
            <span className="hero_name">Deepanshu Sharma</span>
           <div className="underline">
        </div>
        </h1> 
        
        <p>I am very Enthusiastic Developer to learn new technology like Flutter, MERN, And I am a Full Stack Developer.</p>
        </div>
        <div className="right">
            <div className="hero_img">
           <img src={heroimg} alt="" />
          
        </div>
        </div>

        
    </div>
    <div className="buttons">
    <a type="submit" class="btn" onclick="btnswitch(this)">Resume</a>
    <a type="submit" class="btn" onclick="btnswitch(this)">Email ME</a>
    </div>
 </div> 
    {/* <div className="container">
        <div className="home">
        <h1>
            Welcome to Home Page ....
        </h1>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sed sapiente deleniti, vero quia ratione necessitatibus recusandae voluptatum fugit voluptate adipisci reprehenderit corrupti non ipsa dolorem autem aliquid provident voluptatibus?
        </p>
         <img src={img1} alt="" />
         </div>

         
    </div>

    <div className="container">
        <div className="home">
        <h1>
            Welcome to Home Page ....
        </h1>
         </div>
    </div> */}
    
   </>
    );
}

export default Home







