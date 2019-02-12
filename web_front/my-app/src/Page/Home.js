import React, { Component } from 'react'
import { Route,Router } from 'react-router-dom';
import {Information, Society} from './HomeComponent';
import Switch from 'react-router-dom/Switch';

class Home extends Component {
  render() {
    return(
      <div>
         <h2>Home</h2>
         
        <Switch>
          <Route path='/information' component={Information}></Route>
          <Route path='/Society' component={Society}></Route>
        </Switch>
       
      </div>
    );
  }
}

export default Home