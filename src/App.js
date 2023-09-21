import React,{useState} from 'react'
import  ReactDOM  from 'react-dom';
import ImageList from './Components/ImageList'
import ImageSearch from './Components/ImageSearch'
const App =() =>{
  const[images,setImages]=useState([]);


  return(
    <div>

    <ImageSearch setImages={ setImages}/>
    <ImageList images={images}/>

    </div>

  );
}

export default App;