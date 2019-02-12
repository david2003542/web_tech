import React from 'react'
import { Link } from 'react-router-dom';
import {Navbar,NavDropdown,Nav ,Row,Col} from 'react-bootstrap'
const Home = () => (
  <div>
    <h2>Home</h2>
    <Navbar  bg="light" expand="lg">
      <Navbar.Brand href="/">Bristol Social Network</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/information">Information Board</Nav.Link>
          <Nav.Link href="/society">Society Board</Nav.Link>
          <Nav.Link href="/secondhand">Second-Hand Board</Nav.Link>
          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Message</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Preference</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>;
  </div>

);
    

export default Home