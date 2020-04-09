import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import Navba from "./navba"


class Heade extends Component{
    constructor(props){
        
        super(props)
        this.state  ={
            click : true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        this.setState(state =>({
               click : !state.click
        }))
    }

    render(){
        //
     
        return(
           
            <div >
          <button  className="sidebar" onClick={this.handleClick} style={{position :"absolute"}}>
 {this.state.click ? (<FontAwesomeIcon icon={faBars} style={{transition : '0.6s',outline :"none",border:'none'}}/>) : (<FontAwesomeIcon icon={faTimes} style={{position:"absolute",zIndex :1}} />) }
              </button> 
          <div>
          <Navba clic ={!this.state.click}/>
              </div>   
             
          </div>
           
          
        )
    }
}

export default Heade