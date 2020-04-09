import React from 'react';
import Heade from './source/header.js'
import './App.css';
import Navba from "./source/navba"
function App(props) {
  return (
    <div>
       <Heade />
       <div style={{textAlign :"center"}}>
        <img src="IMG_20200102_173821.jpg" width= "200px" height = "200px" style={{borderRadius:"50% 50%" }}/>
       <h2 style={{fontSize :26}}>Full Stack Web developer</h2> 
       <h3>
         HTML,CSS,JS,REACT,(MERN)
       </h3>
       </div>
    </div>
      
       
       
  )
}

export default App;
