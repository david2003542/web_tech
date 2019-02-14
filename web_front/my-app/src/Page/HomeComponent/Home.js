import React from 'react'
import { Container, Row, Col, Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
const Home = (props) => (
  <div>
    <Navbar bg="light" expand="lg">
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
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Message</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Preference</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div>Text Here</div>
        </Col>
        <Col>
          <div>
            Post Here
          </div>
        </Col>
      </Row>
    </Container>
    {props.children}
  </div>

);
    

export default Home