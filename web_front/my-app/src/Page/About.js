import React, { Component } from 'react'
import { BrowserRouter as  Route, Link} from "react-router-dom";
import {Profile} from './AboutComonent'
import Switch from 'react-router-dom/Switch';

class About extends Component {
  render() {
    return(
      <div>
        <Link to='About/Profile'>Profile</Link>
        <Switch>
          <Route path='About/Profile' component={Profile}></Route>
        </Switch>
      </div>
    );
  }
}

export default About
