import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'


// const [foreName, setForeName] = useState('')

const Signup = () => {
  const [foreName, setForeName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userName, setUserName] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return(
    <Form>
      <Form.Group controlId="foreName">
      <Form.Label>foreName</Form.Label>
      <Form.Control type="text" placeholder="Enter foreName" onChange={e => setForeName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="lastName">
      <Form.Label>lastName</Form.Label>
      <Form.Control type="text" placeholder="Enter lastName" onChange={e => setLastName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="userName">
      <Form.Label>userName</Form.Label>
      <Form.Control type="text" placeholder="Enter userName" onChange={e => setUserName(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="birth">
      <Form.Label>birth</Form.Label>
      <Form.Control type="date" placeholder="Enter birth" onChange={e => setBirth(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="email">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
      <Form.Text className="text-muted">
          We'll never share your email with anyone else.
      </Form.Text>
      </Form.Group>

      <Form.Group controlId="password">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="button">
      Submit
      </Button>
    </Form>
  )
}

export default Signup
