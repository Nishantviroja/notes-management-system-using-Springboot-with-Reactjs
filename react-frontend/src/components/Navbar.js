import React from 'react'
import {Link } from "react-router-dom";

export const Navbar = () => {
  
 
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container-fluid">
       
        <Link className="navbar-brand ms-4"  to="/"><h3>SKYNotE</h3></Link>
    
        <div className="me-4" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4  "><Link className='text-white' to="/"><i className="fa-solid fa-home me-1">   </i>Home</Link> </li>
            <li className="nav-item ms-4  "><Link className='text-white' to="/notes"><i class="fa-solid fa-folder me-1">  </i>Notes</Link> </li>
            
           
            
          </ul>
          
        
        
          
        </div>
      </div>
    </nav>
  );
};
