import React from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Navbar, Nav,Image, Container,Row,Col } from 'react-bootstrap'
import './SideNav.css'
import Profile from './Profile';
const SideNav = (props) => (
  <div> 
    <Container>
    <Row className="justify-content-md-center mt-2" >
      <Image style={{height:'200px'}} src={process.env.PUBLIC_URL +'/images/user.svg'} rounded/>
    </Row>
    <Row className="justify-content-md-center">
    <Navbar className="mt-2"  variant="light">
      <Nav onSelect={selectedkey=>props.history.push(selectedkey)}
       fill variant="tabs" defaultActiveKey="/setting/profile" className="text-center side-text" >
          <Nav.Link href="/setting/profile">My Profile</Nav.Link>
          <Nav.Link eventKey="/setting/message">Message</Nav.Link>
          <Nav.Link eventKey="/setting/preference">Preference</Nav.Link>
      </Nav>
    </Navbar>
    </Row>
    <Row className="justify-content-md-center">
    
      <Switch>
        <Col sm="5">
        <Route path="/setting/profile" component={Profile} />
        </Col>
      </Switch>
    
    </Row>
    </Container>
  </div>
);

export default SideNav;