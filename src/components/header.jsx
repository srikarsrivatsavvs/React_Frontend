import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "../App.css";



export default function Header() 
{
  return <div>
    <Navbar bg="white" expand="lg" className='container'>
  <Navbar.Brand href="#home"><img className='caterLogo ' src={require('../catersmart.png')} ></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" >
      <Nav.Link href="#home">Your current location</Nav.Link>
      <Nav.Link href="#home" className="mr-sm-2">Corporate solutions</Nav.Link>
      <Nav.Link href="#home">Sign in</Nav.Link>


    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>;
}
