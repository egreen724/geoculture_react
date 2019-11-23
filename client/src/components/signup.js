import React, { Component } from 'react'
import { connect } from 'react-redux';
import '../App.css';
import {addUser} from '../actions/signUpForm'

class SignUp extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    password_confirm: ''
  }

  handleInputChange = event => {
    const {name, value} = event.target
    const formInfo = {
      [name]: value
    }
    this.setState(formInfo)
  }

  addNewUser = user => {
    fetch('http://localhost:3001/api/user.json').post({user})
      .then(response => {
        return response.json()
      })
      .then(responseJSON => {
        console.log(responseJSON)
      })

  }


  handleSubmit = event => {
    event.preventDefault();
    this.props.addUser(this.state)
    debugger;
  }

  render() {
    return (
      <div className="form">
        <form className="form" onSubmit={this.handleSubmit}>
          <h2> Sign Up </h2>
          <div>
            <label htmlFor="name">Full Name: </label>
            <input type="text" name="name" placeholder="Name" onChange={this.handleInputChange} />
          </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="text" name="email" placeholder="Email" onChange={this.handleInputChange}/>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
          </div>
          <div>
            <label htmlFor="password_confirm">Confirm Password: </label>
            <input type="password" name="password_confirm" placeholder="Confirm Password" onChange={this.handleInputChange}/>
          </div>
          <input type="submit" value="Sign Up" />
        </form>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </div>
    );
  }

};

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {dispatch(addUser(user))}
  }
}


export default connect(null, mapDispatchToProps)(SignUp);
// export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
