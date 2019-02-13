import React, {Component }from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from './Page/AboutComonent';
import { Society, Home } from './Page/HomeComponent';
import { Information} from './Page/InformationComponent';
import { SecondHand } from "./Page/SecondHandComponent";
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