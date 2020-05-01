import React, { Component } from "react";
import Heade from "./header"
import { Container, Row,Col } from "reactstrap";

const Home = () =>{
    
         return(
          <Container style={{zIndex:0}}>
               <Row>
              <Col>
         
            <div style={{textAlign :"center"}}>
            
            <img src="IMG_20200102_173821.jpg" className="myImg" alt = "#"/>
            <h1>JAYANTH PUTHALAPATTU</h1>
            <h2 style={{fontSize :26}}></h2> 
                <h3>
          (MERN-STACK-developer)
             </h3>
        </div>
        </Col>
        </Row>
        </Container>
         )
    
}
export default Home