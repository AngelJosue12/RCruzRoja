// import Nav.css
import './Nav.css'
//import Router Link
import { Link, NavLink } from 'react-router-dom'


import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'


// import logo

import Logo from '../../assets/logo.png'


//import NavData
import{navLinks, navRight} from '../../Data/Data'

//import menu icons
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";


import { useState } from 'react';

export default function Nav() {

  const [isNavLinksShowing, setIsNavLinksShowing]= useState(false);

      if(innerWidth < 1024){
        window.addEventListener('scroll',()=>{
          document.querySelector('.nav-links').classList.add('navLinksHide');
          setIsNavLinksShowing(false);
        })
      };
      window.addEventListener('scroll',()=>{
        document.querySelector('.nav').classList.toggle('navShadow', window.screenY > 0);
      })


  return (
  <nav className='navShadow'>
    <div className='container nav-container '>
        {/*....................Logo............*/}
        <Link to={'/'}  className='logo'>
            <img src={Logo} alt='Logo'/>
        </Link>

        {/*....................NavLinks............*/}
          <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
           {
             navLinks.map((item, index)=>{
              return (
                <li key={index}>
                  <NavLink to={item.path} className={({ isActive }) =>
                    isActive ? 'active' : ''
                  }>
                    <item.icon className='icon-navs'/>
                    <span className='name-navs'>{item.name}</span>
                   
                  </NavLink>
                </li>
              );
              
             })
           } 
            
        </ul>
     
            
              <button className='menu-button' onClick={()=>
                setIsNavLinksShowing(!isNavLinksShowing)
              }>
              {
                !isNavLinksShowing ? <FiMenu /> : <IoCloseSharp />
              }
              </button>
    </div>
    </nav>
  )
}
