import React from 'react'
import { BrowserRouter as Switch, Route } from "react-router-dom";
import {  Row, Col,Navbar, Nav } from 'react-bootstrap'
import './SideNav.css'
import Profile from './Profile';
const SideNav = () => (
  <div>
      <Row>
        <Col sm="3" className="left" >
          <Navbar  expand="lg" variant='light'>
            <Nav className="flex-column text-center side-text pl-3 pt-3">
              <Navbar.Text className="font-weight-bold">Settings</Navbar.Text>
              <Nav.Link >My Profile</Nav.Link>
              <Nav.Link >Message</Nav.Link>
              <Nav.Link >Preference</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col sm="9">
        <Switch>
         <Route path="/setting/profile" component={Profile} />
        </Switch>
        </Col>
      </Row>
  </div>
);

export default SideNav;