import {React} from 'react'
import { InputGroup ,FormControl} from 'react-bootstrap'
// import {SingleDatePicker} from 'react-dates';

const ChangeProfile = () => (
  <div>
      <InputGroup>
        <InputGroup.Text>Account</InputGroup.Text>
        <FormControl placeholder="Account"></FormControl>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Name</InputGroup.Text>
        <FormControl placeholder="Name"></FormControl>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Address</InputGroup.Text>
        <FormControl placeholder="Address"></FormControl>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Birth</InputGroup.Text>
        {/* <SingleDatePicker/> */}
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Major</InputGroup.Text>
        <FormControl placeholder="Major"></FormControl>
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>E-mail:</InputGroup.Text>
        <FormControl placeholder="E-mail"></FormControl>
      </InputGroup>
  </div>
);

export default ChangeProfile