import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import About from './about.js'
import Login from './login.js'

const link = {
  width: '50px',
  padding: '12px',
  margin: '10px 6px 6px 10px',
  textDecoration: 'none',
  color: 'black',
}


class Menu extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavLink
            to="/"
            exact style={link}
            /* add prop for activeStyle */
            activeStyle={{
              color: 'grey'
            }}
          >Home</NavLink>
          <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              color: 'grey'
            }}
          >About</NavLink>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              color: 'grey'
            }}
          >Login</NavLink>
        </div>
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </Router>
    )
  }

}

export default Menu;
