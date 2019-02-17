import React from 'react'
import { ListGroup, Button, Overlay, OverlayTrigger } from 'react-bootstrap'
import ChangeProfile from './ChangeProfile';

const Profile = () => (
  <div>
      <ListGroup className="justify-content-center" variant="flush">
      <ListGroup.Item className="font-weight-bold text-center">My Profile </ListGroup.Item>
        <ListGroup.Item>Acount: </ListGroup.Item>
        <ListGroup.Item>Name: </ListGroup.Item>
        <ListGroup.Item>Address: </ListGroup.Item>
        <ListGroup.Item>Birth: </ListGroup.Item>
        <ListGroup.Item>Major: </ListGroup.Item>
        <ListGroup.Item>E-mail: </ListGroup.Item>
      </ListGroup>
      <OverlayTrigger trigger="click" placement="center" overlay={ChangeProfile}><Button className="mt-2 float-right">Edit</Button></OverlayTrigger>
  </div>
);
export default Profile
