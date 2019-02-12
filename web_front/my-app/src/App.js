import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Home, About } from './Page';
import { Information, Society } from './Page/HomeComponent';

const App = () => (
  
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/information" component={Information} />
      <Route path="/society" component={Society} />
    </div>
  </Router>
);

export default App;