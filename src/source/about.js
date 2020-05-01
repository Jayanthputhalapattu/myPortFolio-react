import React, { Component } from "react"
import { Container, Row,Col} from "reactstrap"



class About extends Component{
   

    render(){
        return(
            <div >
                <div className = "about" style={{zIndex:-1,paddingTop:window.innerHeight/4}}>
                  <Container >
                      <Row style={{  borderBottom:"1.5px solid rgb(155, 25, 122)",borderBottomLeftRadius:24,borderBottomRightRadius:24,}}>
                          <Col >
                          
                        <h1 style={{fontSize:50}}> About</h1> 
                        <p style={{fontSize :20 ,}}>Myself Jayanth, self-taught  web developer (MERN - STACK) and also
ML enthusiast.I have interests in learning algo and Data Structures.
I have worked on projects with Local Development teams. Currently I am pursuing my under Graduation(EC) in Sri Venkateswara University
College of Engineering. 
<p style={{padding:25}}>My motto is<b> "Learn Completely, So that You Cannot blame Yourselves"</b></p>
                        </p>
                        <p></p>
                          </Col>

                          
                      </Row>
                      <Row style={{ fontSize :20,paddingTop:15,paddingBottom:60}}>
                          <Col>
                      <h1 style={{opacity :0.7,fontSize:30,paddingLeft:25}}>Technical-Skills</h1> 
                         <ul className = "tech">
                             <li>HTML,CSS,JS</li>
                             <li>MongoDB,ExpressJS,ReactJS,Node</li>
                             <li>JAVA(core)</li>
                             <li>Python</li>
                             
                         </ul>
                      </Col>
                      </Row>
                  </Container>
                </div>
            </div>
        )
    }
}
export default About
