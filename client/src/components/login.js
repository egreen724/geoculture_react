import React, { Component } from 'react'


export default class LogIn extends Component {

  render() {
    return (
      <div>
        <form>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <input type="submit" value="Log In" />
        </form>

      </div>
    );
  }

};
