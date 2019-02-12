import React from 'react'
import { Route,Link } from 'react-router-dom';
import { Detail} from './AboutComonent'
const Home = () => (
  <div>
    <h2>Home</h2>
    <navigator>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">About Us</Link></div>
      <div><Link to='/information'>Information</Link></div>
      <div><Link to='/society'>Society</Link></div>
    </navigator>
    

  </div>

);
    

export default Home