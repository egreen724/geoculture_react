import React, { Component } from 'react';
import ArtCard from "./artCard.js"
import { connect } from 'react-redux'


class MyList extends Component {

  debugger;
  renderFavorites = () => {
    return this.props.favorites.map((work) => {
       return <ArtCard work={work}/>
   })
  }

  render() {
    return (
      <div>
        <h3>My Saved List:</h3>
        {this.renderFavorites()}
      </div>
    )
  }


}

const mapStateToProps = state => {
  return ({
    favorites: state.favorites
  })
}

export default connect(mapStateToProps)(MyList);
