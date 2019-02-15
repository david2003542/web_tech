import React from 'react'
import {  Card, ListGroup } from 'react-bootstrap'
const Profile = () => (
  <div>
    <Card className="mt-3 mr-3" >
      <Card.Title className="text-center pt-3">User Profile</Card.Title>
      <Card.Img className="pt-2 mb-3 mw-100"  variant="top" style={{height:'200px'}} src={process.env.PUBLIC_URL +'/images/user.svg'}></Card.Img>
      <ListGroup className="justify-content-center" variant="flush">
        <ListGroup.Item>User Acount Name: </ListGroup.Item>
        <ListGroup.Item>Birth: </ListGroup.Item>
        <ListGroup.Item>Major: </ListGroup.Item>
        <ListGroup.Item>E-mail: </ListGroup.Item>
      </ListGroup>

    </Card>
  </div>
);

export default Profile
