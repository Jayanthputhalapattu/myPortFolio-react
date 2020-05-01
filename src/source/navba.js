import React, { Component ,useState} from "react";
import Heade from "./header"
import {FaTimes} from "react-icons/fa"

  const Navba = ({clic}) =>{
   
      
        return(
        <div className = "Box" style={{width:clic ? "330px" : "0px" } } id="Box">
          <h2>
              Coming soon
          </h2>
  
        </div>
        )
        }
export default Navba