import React, { Component } from 'react'
import {logo} from '../GeoCulture.png'
import Menu from '../components/menu'

class HeadingContainer extends Component {

  render() {
    return (
      <div>
        <img src={logo} alt="logo"/>
        <h1> GeoCulture </h1>
        <Menu />
      </div>
    )
  }

}

export default HeadingContainer;
