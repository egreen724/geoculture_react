import React, { Component } from 'react';
import ArtCard from "./artCard.js"
import { connect } from 'react-redux'


class MyList extends Component {

  debugger;
  renderFavorites = () => {
    if (this.props.favorites !== []) {
      return this.props.favorites.map((work) => {
         return <div>
           <h3>My Saved List:</h3>
           <ArtCard work={work}/>
         </div>
    })
  } else {
      return <p>You have not added any favorites yet.</p>
    }
   }


  render() {
    return (
      <div>

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
