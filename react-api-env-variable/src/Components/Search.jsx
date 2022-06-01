import React, { useEffect, useState } from 'react'
import axios from "axios"

function Search({getData}) {
    const [query,setQuery] = useState("");
    
    const handelSubmit=()=>{
        axios({
            url:`${process.env.REACT_APP_MY_API_KEY}`,
            method:"POST",
            params:{
                s:query
            }
        }).then(res=>{
            getData([res.data.meals])
            console.log(res.data.meals)
        }).catch((error)=>{
            console.log(error)
        })
    }

    const handelQuery=(e)=>{
        
        setQuery(e.target.value)
    }

  return (
    <div>
     
        <input onChange={handelQuery} type="text" name="search" id="" />
        <button onClick={handelSubmit}>submit</button>
    </div>
  )
}

export default Search