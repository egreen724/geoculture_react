import React, { Component } from 'react'
import ArtCard from "./artCard.js"
// import artworkService from "./services/ArtworkService.js"

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
    fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
      .then(data => {
        artworks = data
        this.setState({
          artworks: artworks
        })
      })
    }

};
