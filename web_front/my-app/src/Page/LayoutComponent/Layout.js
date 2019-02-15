import React from 'react'
import { Form, FormControl, Button, Navbar, Nav,NavDropdown } from 'react-bootstrap'
import './Layout.css';
const Layout = (props) => (
   <div>
     
     <Navbar className='nav-text' collapseOnSelect expand="lg" bg="dark" variant="dark">
       <Navbar.Brand href="/">Bristol Social Network</Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="mr-auto">
           <Nav.Link href="/information">Information Board</Nav.Link>
           <Nav.Link href="/society">Society Board</Nav.Link>
           <Nav.Link href="/secondhand">Second-Hand Board</Nav.Link>
           <Nav.Link href="/about">About Us</Nav.Link>
           <Form inline>
             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
             <Button variant="outline-success">Search</Button>
           </Form>
           <NavDropdown title="Settings" id="basic-nav-dropdown">
             <NavDropdown.Item href="/profile">User Profile</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.2">Message</NavDropdown.Item>
             <NavDropdown.Item href="#action/3.3">Preference</NavDropdown.Item>
             <NavDropdown.Divider />
             <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
     </Navbar>
     {props.children}
     </div>
     
);

export default Layout;