import React from 'react'
import {  Row, Col,Navbar, Nav } from 'react-bootstrap'
import './Profile.css'
const Profile = () => (
  <div>
      <Row>
        <Col sm="3" className="left" >
          <Navbar  expand="lg" variant='light'>
            <Nav className="flex-column side-text">
              <Navbar.Text className="text-center">Settings</Navbar.Text>
              <Nav.Link >Personal Information</Nav.Link>
              <Nav.Link >Message</Nav.Link>
              <Nav.Link >Preference</Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col sm="9">
        </Col>
      </Row>
  </div>
);

export default Profile
