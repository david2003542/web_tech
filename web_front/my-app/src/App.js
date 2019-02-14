import React, {Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from './Page/AboutComonent';
import { Society, Home } from './Page/HomeComponent';
import { Information} from './Page/InformationComponent';
import { SecondHand } from "./Page/SecondHandComponent";
import {Navbar,NavDropdown,Nav,Form,FormControl,Button} from 'react-bootstrap'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }
  callAPI (){
    fetch("http://localhost:9000/testAPI")
    .then(res=>res.text())
    .then(res=>this.setState({apiResponse:res}))
    .catch(err=>err);
  }
  componentWillMount(){
    this.callAPI();
  }
  render(){
    return(
      <Router>
      <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Bristol Social Network</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          <Nav.Link href="/information">Information Board</Nav.Link>
          <Nav.Link href="/society">Society Board</Nav.Link>
          <Nav.Link href="/secondhand">Second-Hand Board</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title="Settings" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Message</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Preference</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        <p>{this.state.apiResponse}</p>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/information" component={Information} />
        <Route path="/society" component={Society} />
        <Route path="/secondhand" component={SecondHand} />
      </div>
      </Router>
    );
  }
}

export default App;