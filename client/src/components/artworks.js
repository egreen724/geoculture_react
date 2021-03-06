import React, { Component } from 'react'
import ArtCard from "./artCard.js"
import { connect } from 'react-redux'
import {fetchArtworks, clearFilterCity } from "../actions/artActions.js"

// import artworkService from "./services/ArtworkService.js"


class Artworks extends Component {

  renderArtworks = () => {
    let filteredArray = []

    if (this.props.filterCity !== "" || undefined) {
      filteredArray = this.props.artworks.filter(work => work.location === this.props.filterCity)
    } else if (this.props.artworks !== []){
      filteredArray = this.props.artworks
    }

    if (filteredArray !== []) {
       return filteredArray.map((work) => {
          return <ArtCard work={work}  />
          // return <ArtCard work={work} favorite={this.props.addToFavorites} remove={this.props.removeFromFavorites} />
      })
    }

    return filteredArray

  }

  showCityFilter = () => {
    if (this.props.filterCity !== "") {
      return <div className="filter">
        <button onClick={() => this.props.clearFilterCity()}>X</button>
        {this.props.filterCity}
      </div>
    }
  }

  render() {
    return (
      <div>
          {this.showCityFilter()}
        <div className="ArtworkContainer">
          {this.renderArtworks()}
        </div>
      </div>

    )
  }

  componentDidMount(){
    console.log('a')
    this.props.fetchArtworks();
    console.log('b')
  }

}



const mapStateToProps = state => {
  return ({
    artworks: state.artworks,
    filterCity: state.selectedCity
  })
}

const mapDispatchToProps = dispatch => ({
  fetchArtworks: () => dispatch(fetchArtworks()),
  clearFilterCity: () => dispatch(clearFilterCity())
  // addToFavorites: artwork => dispatch(addToFavorites(artwork)),
  // removeFromFavorites: artwork => dispatch(removeFromFavorites(artwork))
})


export default connect(mapStateToProps, mapDispatchToProps)(Artworks);
