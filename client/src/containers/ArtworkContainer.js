import React, { Component } from 'react'
import Autocomplete from "../components/autocomplete";


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
      </div>
    )
  }

}

export default ArtworkContainer;
