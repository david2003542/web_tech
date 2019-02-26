import React, {Component }from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { About } from './components/AboutComponent';
import { Society, Home } from './components/HomeComponent';
import { Information} from './components/InformationComponent';
import { SecondHand } from "./components/SecondHandComponent";
import { Reg } from "./components/RegistrationComponent";
import { } from "./components/SignComponent";
import { Signup } from "./components/SignComponent";
import { Layout } from './components/LayoutComponent';
import { SideNav } from './components/UserComponent';


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
        <Route path="/registration" component={Reg} />
        <Route path="/information" component={Information} />
        <Route path="/society" component={Society} />
        <Route path="/secondhand" component={SecondHand} />
        <Route path="/setting" component={SideNav} />
        <Route path="/signup" component={Signup} />
        <p>{this.state.apiResponse}</p>
        </Layout>
        </div>
      </Router>
    );
  }
}

export default App;
