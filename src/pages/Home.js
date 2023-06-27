import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, Form } from 'react-router-dom';
import SearchUser from '../users/SearchUser';

export default function Home() {

   const [users,setUsers]=useState([]);

   const {id}=useParams()

   useEffect(()=>{
    loadUsers();
   },[]);

   const loadUsers=async()=>{
    const result=await axios.get("http://localhost:8081/users")
    setUsers(result.data);
   };

   const deleteUser=async (id)=>{
    await axios.delete(`http://localhost:8081/user/${id}`)
    loadUsers()
   }
  
   const [value, setValue] = useState("");
   
   const[tableFilter, setTableFilter] = useState([]);

   const filterData = (e) =>{
      if(e.target.value !=""){
         setValue(e.target.value);
         const filterTable = users.filter(o=>Object.keys(o).some(k=>
            String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTableFilter([...filterTable])
      }else {
         setValue(e.target.value);
         setUsers([...users])
      }
   }
  



  

  return (
    <div className='container'>
        <div className="py-2">
        <div className="container mt-4">
            <div className="input-group mb-3 ">
              
                <input type="text" className="form-control" placeholder="Search By Customer Name.."  aria-label="Username" aria-describedby="basic-addon1" value={value}
                   onChange={filterData}
                />
             </div>
             


        <table className= "table table-bordered small-table">
          <thead className="table table-color">
        <tr>
           <th scope="col">Id</th>
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Description</th>
           <th scope="col">AssignedTo</th>
           <th scope="col">DueDate</th>
           <th scope="col">CreatedAt</th>
           <th scope="col">CompletedAt</th>
           <th scope="col">UpdatedAt</th>
           <th scope="col">Action</th>

        </tr>
    </thead>
    <tbody  className="table-group-divider">
    

         {value.length > 0 ? tableFilter.map((data)=> {
      return(
                <tr>
               
                   <td>{data.name}</td>
                   <td>{data.email}</td>
                   <td>{data.description}</td>
                   <td>{data.assignedto}</td>
                   <td>{data.duedate}</td>
                   <td>{data.createdat}</td>
                   <td>{data.completedat}</td>
                   <td>{data.updatedat}</td>
                   </tr>
        )
      })
   
     :
    
     
        users.map((user, index) => (
                <tr>
                  
                   <th scope="row" key={index}>{index+1}1</th>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.description}</td>
                   <td>{user.assignedto}</td>
                   <td>{user.duedate}</td>
                   <td>{user.createdat}</td>
                   <td>{user.completedat}</td>
                   <td>{user.updatedat}</td>
                   
               
              
                      
                      <Link className="btn btn-outline-success mx-2"
                      
                      to={`/editUser/${user.id}`}
                      >Edit</Link>

                      <button className="btn btn-outline-danger mx-2"
                      onClick={()=>deleteUser(user.id)}
                      
                      >Delete</button>

                 
                   
               </tr>
        )
      )
        
   }
   
     </tbody>
     </table>
    </div>
  </div>
  </div>
  
  )
}
