
import React from 'react';
import { Link } from 'react-router-dom';
import SearchUser from '../users/SearchUser';


export default function() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
    
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
          Customer Relationship Management
      </Link>
      <button className="navbar-toggler"
       type="button" 
       data-bs-toggle="collapse" 
       data-bs-target="#navbarSupportedContent" 
       aria-controls="navbarSupportedContent"  
       aria-expanded="false" 
       aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
       </button>
    
  
       
       
      
   
       <Link className="btn btn-outline-light" to="/adduser">
             + Add a New Task
        </Link>


    </div>
  
  </nav>
</div>
  )
}
