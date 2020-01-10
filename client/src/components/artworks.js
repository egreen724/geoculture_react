import React, { Component } from 'react'
import ArtCard from "./artCard.js"
import { connect } from 'react-redux'
import {fetchArtworks} from "../actions/artActions.js"
// import artworkService from "./services/ArtworkService.js"


class Artworks extends Component {

  renderArtworks = () => {
    if (this.props.artworks !== []) {
      return <ArtCard art={this.props.artworks}/>
    }
  }


  render() {
    return (
      <div>

      </div>
    );
  }



};

const mapStateToProps = state => {
  return ({
    artworks: state.artworks
  })
}

export default connect(mapStateToProps, {fetchArtworks})(Artworks);
