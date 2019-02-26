import React , { useState } from 'react'
import { ListGroup, Button, Image, Modal,  } from 'react-bootstrap'
import ChangeProfile from './ChangeProfile';


const Profile = ()=>{
  const [Display, setDisplay] = useState(false);
  return(
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
      <Button onClick={()=>setDisplay(true)}  variant="light" className="mt-2 float-right"><Image src={process.env.PUBLIC_URL +'/images/edit.svg'}></Image></Button>
      <Modal show={Display} onHide={()=>setDisplay(false)} >
        <Modal.Header closeButton>Change Your Profile</Modal.Header>
        <ChangeProfile></ChangeProfile>
        <Modal.Footer>
          <Button onClick={()=>setDisplay(false)} className="float-right">Cancel</Button>
          <Button className="float-right">Save</Button>
        </Modal.Footer>
      </Modal>
  </div>)
};

export default Profile
