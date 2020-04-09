import React, { Component } from "react"
import { Container, Row, Col } from "reactstrap"
import { FontAwesomeIcon, github} from "@fortawesome/react-fontawesome"
import {  } from "@fortawesome/free-solid-svg-icons"


class Contact extends Component{
    render(){
        return(
            <div style={{}}>
                 
            <Container>
                   <Row >
                       <Col ></Col>
                       <Col className="contact-me">ContactMe</Col>
                       <Col></Col>
                    
                   </Row>
                   </Container>
                   <Container className="icons">
                       <Row >
                           <Col>
                         <a href="https://github.com/Jayanthputhalapattu">  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"  style={{width:100,height:100,borderRadius:'8px 8px',}}/></a>
                           </Col>
                           <Col>
                           <a href="https://www.linkedin.com/in/jayanth-puthalapattu-510946182/"><img src="https://cdn3.iconfinder.com/data/icons/material-design-social-icons/152/Linkedin_icon-512.png" style={{width:100,height:100,borderRadius:'8px 8px'}}/></a>
                           </Col>
                           <Col>
                           <a href="mailto:jayanthp17@gmail.com"><img src="https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Email-512.png" style={{width:110,height:110,borderRadius:'8px 8px'}}/></a>
                           </Col>
                           <Col></Col>
                           <Col></Col>
                       </Row>
                   </Container>
           </div>
        )
    }
}

export default Contact
