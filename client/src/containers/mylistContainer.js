import React, { Component } from 'react';
import ArtCard from "../components/artCard.js"
import { connect } from 'react-redux'


class MyList extends Component {

  renderFavorites = () => {

    if (this.props.favorites.length > 0) {
        return this.props.favorites.map((work) => {
         return <div key={work.id}>
           <ArtCard work={work}/>
         </div>
    })} else {
        return <p>You have not added any favorites yet.</p>
      }
   }


  render() {
    return (
      <div className="ArtworkContainer center">
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
