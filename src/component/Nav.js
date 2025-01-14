import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import logo from './../assets/1713336702311.jpg'
const Navs = () => {
  return (
    <div>
      <Navbar  expand="lg">
  <Navbar.Brand  id='logo' href="#home">
  <img src={logo} alt='logo'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#sweets">Sweets</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>

  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Navs;
