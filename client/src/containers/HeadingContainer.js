import React, { Component } from 'react'
import Menu from '../components/menu'

const headerStyle = {

  height: '75px',
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
      <div >
        <img className="logoStyle" src='https://i.imgur.com/GFDLdza.png' alt="logo"/>
        <Menu style={headerStyle}/>
      </div>
    )
  }

}

export default HeadingContainer;
