import { useEffect, useState } from "react";
import axios from "axios";

export default function SearchUser() {
  const [nameList, setNameList] = useState([])
  const [search, setSearch] = useState("")
  
  useEffect(()=>{
    axios.get("http://localhost:3000/")
    .then((response)=>{setNameList(response.data.results) })
  },[])
  return (
    <div className="SearchUser">
       <input type="text" id="find" placeholder="Search here..." onChange={(e)=>setSearch(e.target.value)}/>
        {nameList.filter((item)=>{
        if(search===""){
          return item
        }
        else if(item.name.toLowerCase().includes(search.toLowerCase())){
          return item
        }
        })
         .map((item)=>{
          return <h4>{item.name}</h4>
         })}
    </div>
  );
  
        }


