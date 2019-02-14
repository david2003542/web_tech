import React from 'react'
<<<<<<< HEAD
import {Container,Row,Col,Form, Button, ButtonToolbar} from 'react-bootstrap'
import './Home.css'
=======
import { Container, Row, Col, Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'
>>>>>>> b76195c60e5cdff213bb74614c0173ab2ba6b370
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
        <Col sm= {3}>
          <div>Text Here</div>
        </Col>
        <Col sm={9} >
          <Row className="justify-content-md-center">
            <Form>
              <Form.Group controlId="formTextarea">
                <Form.Label>Posting</Form.Label>
                <Form.Control placeholder="Share something today" as="textarea" rows="3" cols="80"/>
                <ButtonToolbar>
                  <Button size='sm' variant="outline-secondary">Film</Button>
                  <Button size='sm' variant="outline-secondary">Image</Button>
                  <Button as="input" type="submit" value="Submit" />
                </ButtonToolbar>
              </Form.Group>
            </Form>
          </Row>
          <Row>

          </Row>
        </Col>
      </Row>
    </Container>
    {props.children}
  </div>

);
    

export default Home