import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchUser from './SearchUser';


export default function AddUser() {

     let navigate=useNavigate();

    const [user,setUser]=useState({
        name:"",
        email:"",
        description:"",
        assignedto:"",
        duedate:"",
        createdat:"",
        completedat:"",
        updatedat:""

    })
    
    const{name,email,description,assignedto,duedate,createdat,completedat,updatedat}=user
  

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})

    };

    const onSubmit= async (e)=>{
         e.preventDefault();
         await axios.post("http://localhost:8081/user",user)
         navigate("/")
    };
const [value, setValue] = useState('');

  return (
        

    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
               <h2 className="text-center m-4">Add a New Task</h2>
               <form onSubmit={(e)=>onSubmit(e)}>
              
  
                <div className="mb-3">
                <label htmlfor="Name" className="form-label">
                    Name
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Name"
                name="name"
                value={name} 
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Email" className="form-label">
                    Email
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Email-address"
                name="email"
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Description" className="form-label">
                    Description
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter Your Description"
                name="description"
                value={description}
                onChange={(e)=>onInputChange(e)}
            
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Assigned To " className="form-label">
                    Assigned To
                </label>
                <input
                type={"text"}
                className="form-control"
                placeholder="Enter The Name Of The Doer"
                name="assignedto"
                value={assignedto}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Due Date" className="form-label">
                    Due Date
                </label>
                <input
                type={"date"}
                className="form-control"
                placeholder="Enter Due Date"
                name="duedate"
                value={duedate}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Created At" className="form-label">
                    Created At
                </label>
                <input
                type={"date"}
                className="form-control"
                placeholder="Select a Date"
                name="createdat"
                value={createdat}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Completed At" className="form-label">
                    Completed At
                </label>
                <input
                type={"date"}
                className="form-control"
                placeholder="Select a Date"
                name="completedat"
                value={completedat}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <div className="mb-3">
                <label htmlfor="Updated at" className="form-label">
                    Updated At
                </label>
                <input
                type={"date"}
                className="form-control"
                placeholder="Select a Date"
                name="updatedat"
                value={updatedat}
                onChange={(e)=>onInputChange(e)}
                />
               </div>
               <button type="submit" className="btn btn-outline-primary">
                SUBMIT
                </button>
                <Link className="btn btn-outline-danger mx-2" to="/">
                    CANCEL
                    </Link>
                    </form>
                    
               
            </div>
          </div>
          </div>
     
     
    
  )
}
