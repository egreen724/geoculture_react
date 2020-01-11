import React, { Component } from 'react'
import Autocomplete from "../components/autocomplete";
// import Artworks from '../components/artworks'
import ArtCards from "../components/artCard.js"

let cities = []

class ArtworkContainer extends Component {

  state = {
    cities: []
  }


  render() {
    return (
      <div className="center">
        <Autocomplete suggestions={this.state.cities}/>
        <ArtCards />
      </div>
    )
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
      .then(data => {
        cities = data.map(artwork => artwork.location)
        let uniqueCities = [...new Set(cities)]
        this.setState({
          cities: uniqueCities
        })
      })

    }

}

export default ArtworkContainer;
