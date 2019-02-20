import React, { Component, useState } from "react";
import { Link } from 'react-router-dom';
import {Card, Container, Row, Col, Button, Navbar, Nav, Image, Jumbotron } from 'react-bootstrap';
import './Registration.css'

const Reg = () => (
<div>

  <Navbar expands="lg" id = "navbar-brand" bg="white" variant="light" sticky="top">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/images/bristol-logo.jpg"
        width="100"
        height="70"
      />
      {'Welcome to the Bristol Social Network'}
    </Navbar.Brand>
    // Nav.Link
    <Link to = "/signin">
      <Button sm="4" variant = "light">Sign in</Button>
    </Link>
  </Navbar>

<div id = "bg">
</div>

  <Container>
      <Row>
        <Col>
          <Container id = "jumbotron">
            <Jumbotron>
              <h1>Welcome to the Bristol Social Network</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <Link to = "/about">
                <Button>Sign up here!</Button>
              </Link>

              <Row style = {{align:'center'}}>
              <h2 className="text-center" style={{marginTop:'2rem', width:'18rem'}}>More Information</h2>
              </Row>

              <Row>

                <Col>
                  <Card style={{width: '18rem', marginTop: '1rem'}}>
                    <Card.Img variant="top" src="/images/team.jpg" />
                      <Card.Body>
                        <Card.Title>The Team</Card.Title>
                          <Card.Text>If you would like to find out more about the Network
                                  and the people who created it please click the button below!</Card.Text>
                          <Link to = "/about">
                            <Button>About us!</Button>
                          </Link>
                      </Card.Body>
                    </Card>
                 </Col>

              <Col>
                <Card style={{width: '23.5rem', marginTop: '1rem'}} >
                  <Card.Img variant="top" src="/images/office.jpg"/>
                    <Card.Body>
                      <Card.Title>The Office</Card.Title>
                        <Card.Text>If you would like to see more of the University of Bristol
                         please click the button below!</Card.Text>
                        <Link to = "/about">
                          <Button>See more!</Button>
                        </Link>
                    </Card.Body>
                  </Card>
              </Col>

              <Col>
                <Card style={{width: '18rem', marginTop: '1rem'}} >
                  <Card.Img variant="top" src="/images/technology.png"/>
                    <Card.Body>
                      <Card.Title>Blog</Card.Title>
                        <Card.Text>If you would like to find out more about the things that are here
                         please click the button below!</Card.Text>
                        <Link to = "/about">
                          <Button>Read more!</Button>
                        </Link>
                    </Card.Body>
                  </Card>
               </Col>

              </Row>

            </Jumbotron>
          </Container>
        </Col>
      </Row>
  </Container>

  <Navbar>
      <Navbar.Text>This website was created on 19-02-2019 by the University
      of Bristol's Computer Science department</Navbar.Text>
  </Navbar>

</div>
);

export default Reg
