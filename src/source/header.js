import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from 'react-transition-group';
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
        console.log(this.state.click)
        return(
           
            <div >
          <button  className="sidebar" onClick={this.handleClick} >
 {this.state.click ? (<FontAwesomeIcon icon={faBars} style={{transition : '0.6s',}}/>) : (<FontAwesomeIcon icon={faTimes} style={{transition : '3s',position:"absolute",zIndex:1}} />) }
              </button> 
          <div>
          <Navba clic ={!this.state.click}/>
              </div>    
          </div>
         
          
        )
    }
}

export default Heade