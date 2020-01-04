import React, { Component } from 'react'
import Autocomplete from "../components/autocomplete";
import Artworks from '../components/artworks'

let cities = []

class ArtworkContainer extends Component {

  state = {
    cities: []
  }

// Use redux to send the location from autocomplete to Artworks as a prop (sibling components)
  render() {
    return (
      <div className="center">
        <Autocomplete suggestions={this.state.cities}/>
        <Artworks />
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
