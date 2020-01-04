import React, { Component } from 'react'
import ArtCard from "./artCard.js"
import ArtworkService from "./services/ArtworkService.js"

let artworks = []

export default class Artworks extends Component {
  state = {
    artworks: []
  }

  renderArtworks = () => {
    if (this.state.artworks !== []) {
      return <ArtCard art={this.state.artworks}/>
    }
  }


  render() {
    return (
      <div>
        {this.renderArtworks()}
      </div>
    );
  }

  componentDidMount() {
    ArtworkService.fetchArtworks().then(artworks => this.setState(artworks: artworks))

    }

};
