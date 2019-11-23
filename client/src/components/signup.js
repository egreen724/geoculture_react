import React, { Component } from 'react'
import '../App.css';

export default class SignUp extends Component {

  render() {
    return (
      <div className="form">
        <form className="form">
          <h2> Sign Up </h2>
          <div>
            <label htmlFor="name">Full Name: </label>
            <input type="text" name="name" placeholder="Name" />
          </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div>
            <label htmlFor="password_confirm">Confirm Password: </label>
            <input type="password" name="password_confirm" placeholder="Confirm Password" />
          </div>
          <input type="submit" value="Sign Up" />
        </form>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
    );
  }

};
