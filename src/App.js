import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row ,Col } from 'reactstrap';
import './App.css';
import About from "./source/about"
import Contact from "./source/Contact"
import Projects from "./source/project"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./source/Home"
import Heade from "./source/header"
import Footer from './source/Footer';

const  App=()=> {

  return (
  <div>

     
      <Container fluid> 
        <Row>
          <Col>
          <Heade />
          </Col>
        </Row>
        <Row>
          <Col>
           <Home />
          </Col>
        </Row>
        <Row>
          <Col>
             <About />
          </Col>
        </Row>
       <Row>
         <Col>
         <Projects />
         </Col>
       </Row>
       <hr/>
       <Row>
         <Col>
         <Footer />
         </Col>
       </Row>
      </Container>
  
    <Router>
     <Switch>
     <Route path = '/' component ={Home} exact/>
       <Route path = '/about' component ={About} />
       <Route path = '/projects' component ={Projects} />
        <Route path ='/contact' component= {Contact} />
     
     </Switch>
     </Router>   
      
 
</div>
   
       
  )
}

export default App;
