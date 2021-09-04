import {React,useState} from 'react'
import './Navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [navbar, SetNavbar]= useState(false)

  const sticky = ()=>{
    // console.log(window.scrollY)
    if(window.scrollY> 10){
          SetNavbar(true);
          // console.log("sticky");
    }
    else{
      SetNavbar(false);
      // console.log("navbar");
    }
  }


  window.addEventListener('scroll', sticky);


    return (
  <>
 
          <nav className={navbar ? 'Navbar sticky' : 'Navbar'}>
            <NavLink className="Hlink" to="/">Home</NavLink>
            
            <div className="links">
            
              <NavLink to="/project">Project</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            {/* <ul>
              <li><NavLink to="/project">Project</NavLink></li>
              <li></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul> */}
            {/* <div className="blur"></div> */}
          </nav>

        </>
    )
}

// window.addEventListener('scroll', () =>{
//   var nav = document.querySelector("nav")
//   nav.classList.toggle("sticky", window.screenY > 0)
// })

export default Navbar
