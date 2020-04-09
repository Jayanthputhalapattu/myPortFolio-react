import React from 'react';
import Heade from './source/header.js'
import './App.css';
import About from "./source/about"
import Contact from "./source/Contact"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./source/Home"
function App() {
  return (
  <div>
       <Heade />
  
   <Router>
     <Switch>
     <Route path = '/' component ={Home} />
       <Route path = '/about' component ={About} />
       <Route path = 'projects' component ={Projects} />
        <Route path ='/contact' component= {Contact} />
     
     </Switch>
     </Router>  
        
 
</div>
   
       
  )
}

export default App;
