import React, { Component } from 'react'
import {logo} from '../GeoCulture.png'
import Menu from '../components/menu'

const headerStyle = {
  display: 'inline',
  height: '50px',
  width: '100%',
  clear: 'both',
  padding: '10px',
  display: 'flex',
  flex_direction: 'row',
  background: "white"
}



class HeadingContainer extends Component {

  render() {
    return (
      <div style={headerStyle}>
        <img src={logo} alt="logo"/>
        <Menu style={headerStyle}/>
      </div>
    )
  }

}

export default HeadingContainer;
