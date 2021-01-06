import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import { Switch } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from './Navbar';

const App = () =>{
    return(
    <>
    <Navbar/>
    <Switch>
    <Route exact path = '/' component = {Home}></Route> 
    <Route exact path = '/about' component = {About}></Route> 
    <Route exact path = '/service' component = {Service}></Route> 
    <Route exact path = '/contact' component = {Contact}></Route> 
    <Redirect to = '/' />
    
    </Switch>
    </>
    );
};

export default App;