import { useState } from "react";
import React from 'react'
import axios from "axios";


const ImageSearch =({setImages})=>{

    const[term,setTerm]=useState('');
    
   async function ImplementSearch(){
    try{
        const response=await axios.get("https://api.unsplash.com/search/photos",{
            params:{
                query :term
            },
            headers:{
                Authorization:"Client-ID N3QTFmHOjY6gwiDFFMbhZF1xRoaNLJBxpOAf2kNwVZA"
            }
        })
        
        // .then(response =>console.log(response.data.result))
        // .catch(err=>console.log(err))
        // console.log(response.data.results)
        setImages(response.data.results)
    }
    catch(err){
        console.log(err)
    }
    }

    return(
        <div>
            <input type='text' placeholder='enter something...'
            onChange={e=>setTerm(e.target.value)}
            ></input>
            <button onClick={ImplementSearch}>Search</button>
        </div>

    );
}

export default ImageSearch;