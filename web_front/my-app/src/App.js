import React, {Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from './Page/AboutComponent';
import { Society, Home } from './Page/HomeComponent';
import { Information} from './Page/InformationComponent';
import { SecondHand } from './Page/SecondHandComponent';
import {Layout} from './Page/LayoutComponent';
import { Profile } from './Page/UserComponent';

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
          
        <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/information" component={Information} />
        <Route path="/society" component={Society} />
        <Route path="/secondhand" component={SecondHand} />
        <Route path="/profile" component={Profile} />
        <p>{this.state.apiResponse}</p>
        </Layout>
        </div>
      </Router>
    );
  }
}

export default App;