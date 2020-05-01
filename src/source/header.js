import React, { Component, useState } from "react";


import {FaTimes ,FaBars, FaBorderNone} from 'react-icons/fa'

import Navba from "./navba"
import { Button } from "reactstrap";

const Heade = () =>{
    const [clic,setClic] = useState(false)
        return(
           
            <div >
                <Navba clic ={clic}/>
              <span onClick={()=>setClic(!clic )} className="sidebar">
                  {clic ? <span style={{marginLeft:300,transition:"0.4s cubic-bezier(0.47, 0, 0.745, 0.715) ",zIndex:1}} ><FaTimes style={{transition:"0.4s cubic-bezier(0.47, 0, 0.745, 0.715)"}}/></span> : <FaBars />  }
                  </span>    
          <div>
          
          
              </div>   
             
          </div>
           
          
        )
  
    }
export default Heade

