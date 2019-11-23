import React, { Component } from 'react'
import {logo} from '../GeoCulture.png'
import Menu from '../components/menu'

const headerStyle = {
  display: 'inline',
  height: '75px',
  width: '100%',
  clear: 'both',
  padding: '10px',
  display: 'flex',
  flex_direction: 'row',
  background: "white"
}

const logoStyle = {
  height: '75px'
}



class HeadingContainer extends Component {

  render() {
    return (
      <div style={headerStyle}>
        <img style={logoStyle} src='https://i.imgur.com/GFDLdza.png' alt="logo"/>
        <Menu style={headerStyle}/>
      </div>
    )
  }

}

export default HeadingContainer;
