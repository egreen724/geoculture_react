import React, { Component } from 'react'
import {logo} from '../GeoCulture.png'
import Menu from '../components/menu'

const headerStyle = {
  display: 'inline',
  height: '50px',
  clear: 'both',
  padding: '10px',
  display: 'flex',
  flex_direction: 'row'
}

class HeadingContainer extends Component {

  render() {
    return (
      <div style={headerStyle}>
        <img style={headerStyle} src={logo} alt="logo"/>
        <h1> GeoCulture </h1>
        <Menu style={headerStyle}/>
      </div>
    )
  }

}

export default HeadingContainer;
