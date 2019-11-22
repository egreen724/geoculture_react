import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about.js'
import Login from './login.js'
import App from '../App.js'

class Menu extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
      </Router>
    )
  }

}

export default Menu;
