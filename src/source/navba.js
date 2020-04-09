import React, { Component } from "react";


class Navba extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className = "Box" style={{width: this.props.clic ? "330px" : "0px"} }>
          <ul>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            
          </ul>
  
        </div>
        )
    }
}
export default Navba