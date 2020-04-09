import React, { Component } from "react";


class Navba extends Component{
  

    render(){
        return(
        <div className = "Box" style={{width: this.props.clic ? "330px" : "0px"} }>
          <ul>
              <li><a href= "/about">About</a></li>
              <li><a href= "/projects">Projects</a></li>
              <li><a href= "/contact">Contact</a></li>
            
          </ul>
  
        </div>
        )
    }
}
export default Navba