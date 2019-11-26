import React, { Component } from 'react'
import Autocomplete from "../components/autocomplete";
import Artworks from '../components/artworks'

class ArtworkContainer extends Component {

  render() {
    return (
      <div>
      <Autocomplete suggestions={[
        "Berlin",
        "Paris",
        "New York City",
        "London",
        "Munich",
        "Prague"
      ]}
    />
    <Artworks />
      </div>
    )
  }

}

export default ArtworkContainer;
