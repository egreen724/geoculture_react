import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const link = {
  width: '50px',
  padding: '12px',
  margin: '10px 6px 6px 10px',
  textDecoration: 'none',
  color: 'black',
  clear: 'both'
}


class Menu extends Component {

  render() {
    return (

        <div>
          <NavLink
            to="/"
            exact style={link}
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
            to="/mylist"
            exact style={link}
            activeStyle={{
              color: 'grey'
            }}
          >My Favorites ({this.props.favorites.length})</NavLink>
        </div>

    )
  }
}

const mapStateToProps = state => {

  return ({
    favorites: state.favorites
  })
}

export default connect(mapStateToProps)(Menu);
