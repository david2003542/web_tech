import React from 'react'
import { ListGroup, Button, Image, Modal,  } from 'react-bootstrap'
import ChangeProfile from './ChangeProfile';


const Profile = ()=>(
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
      <Button   variant="light" className="mt-2 float-right"><Image src={process.env.PUBLIC_URL +'/images/edit.svg'}></Image></Button>
      <Modal  >
        <Modal.Header closeButton>Change Your Profile</Modal.Header>
        <ChangeProfile></ChangeProfile>
        <Modal.Footer>
          <Button  className="float-right">Cancel</Button>
          <Button className="float-right">Save</Button>
        </Modal.Footer>
      </Modal>
  </div>
);

// class Profile extends Component{
//   constructor(props, context){
//     super(props,context);
//     this.handleshow = this.handleshow.bind(this);
//     this.handleclose = this.handleclose.bind(this);
//     this.state = {
//       show :false,
//     }
//   }
//   handleclose (){
//     this.setState({show:false});
//   }
//   handleshow(){
//     this.setState({show:true});
//   }
//   render(){
//     return(
//       <div>
//       <ListGroup className="justify-content-center" variant="flush">
//       <ListGroup.Item className="font-weight-bold text-center">My Profile </ListGroup.Item>
//         <ListGroup.Item>Acount: </ListGroup.Item>
//         <ListGroup.Item>Name: </ListGroup.Item>
//         <ListGroup.Item>Address: </ListGroup.Item>
//         <ListGroup.Item>Birth: </ListGroup.Item>
//         <ListGroup.Item>Major: </ListGroup.Item>
//         <ListGroup.Item>E-mail: </ListGroup.Item>
//       </ListGroup>
//       <Button onClick={this.handleshow}  variant="light" className="mt-2 float-right"><Image src={process.env.PUBLIC_URL +'/images/edit.svg'}></Image></Button>
//       <Modal show={this.state.show} onHide={this.handleclose} >
//         <Modal.Header closeButton>Change Your Profile</Modal.Header>
//         <ChangeProfile></ChangeProfile>
//         <Modal.Footer>
//           <Button onClick={this.handleclose} className="float-right">Cancel</Button>
//           <Button className="float-right">Save</Button>
//         </Modal.Footer>
//       </Modal>
//   </div>

//     )};
// }

export default Profile
