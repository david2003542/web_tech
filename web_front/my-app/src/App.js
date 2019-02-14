import React, {Component }from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { About } from './Page/AboutComonent';
import { Society, Home } from './Page/HomeComponent';
import { Information} from './Page/InformationComponent';
import { SecondHand } from "./Page/SecondHandComponent";
class App extends Component{
  render(){
    return(
      <Router>
        <div>
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