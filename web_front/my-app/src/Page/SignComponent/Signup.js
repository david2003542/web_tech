import React from 'react'
import { Form, Button } from 'react-bootstrap'

let state = {
  ForeName:"",
  LastName:"",
  userName:"",
  birth:"",
  email:"",
  password:""
}

let handleForeNameChange = (foreName) => {
  this.state.foreName = foreName
  console.log(state)
}


let handleSubmit = () => {
  console.log('submit')
}

const Signup = () => (
  <Form>
    <Form.Group controlId="formForeName">
    <Form.Label>foreName</Form.Label>
    <Form.Control type="text" placeholder="Enter foreName" onChange={handleForeNameChange} />
    </Form.Group>

    <Form.Group controlId="formLastName">
    <Form.Label>lastName</Form.Label>
    <Form.Control type="text" placeholder="Enter lastName" />
    </Form.Group>

    <Form.Group controlId="userName">
    <Form.Label>userName</Form.Label>
    <Form.Control type="text" placeholder="Enter userName" />
    </Form.Group>

    <Form.Group controlId="birth">
    <Form.Label>birth</Form.Label>
    <Form.Control type="date" placeholder="Enter birth" />
    </Form.Group>

    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="button" onClick={handleSubmit}>
    Submit
    </Button>
  </Form>
);

export default Signup