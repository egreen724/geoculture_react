import React, { Component } from 'react';
import ArtCard from "../components/artCard.js"
import { connect } from 'react-redux'


class MyList extends Component {

  renderFavorites = () => {

    if (this.props.favorites !== []) {
      return this.props.favorites.map((work) => {
         return <div>
           <ArtCard work={work}/>
         </div>
    })
  } else {
      return <p>You have not added any favorites yet.</p>
    }
   }


  render() {
    return (
      <div className="ArtworkContainer center">
        <p>My Favorites:</p>
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