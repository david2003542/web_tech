import React, {Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from './Page/AboutComponent';
import { Society, Home } from './Page/HomeComponent';
import { Information} from './Page/InformationComponent';
import { SecondHand } from "./Page/SecondHandComponent";


class App extends Component{
  constructor(props){
    super(props);
    this.state = {apiResponse:""};
  }
  callAPI (){
    fetch("http://localhost:8000/graphql?query={query:hello}")
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
        <Home>
          <Route path="/about" component={About} />
          <Route path="/information" component={Information} />
          <Route path="/society" component={Society} />
          <Route path="/secondhand" component={SecondHand} />
        </Home>
        </div>
      </Router>
    );
  }
}

export default App;