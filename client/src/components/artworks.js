import React, { Component } from 'react'
import ArtCard from "./artCard.js"
import { connect } from 'react-redux'
import {fetchArtworks} from "../actions/artActions.js"
// import artworkService from "./services/ArtworkService.js"


class Artworks extends Component {

  renderArtworks = () => {
    let filteredArray = []

    if (this.props.filterCity !== "") {
      filteredArray = this.props.artworks.filter(work => work.location === this.props.filterCity)
    } else if (this.props.artworks !== []){
      filteredArray = this.props.artworks
    }


    if (filteredArray !== []) {
       return filteredArray.map((work) => {
          return <ArtCard work={work}/>
      })
    }

  }

  render() {
    return (
      <div>
        {this.renderArtworks()}
      </div>
    )
  }

  componentDidMount(){
    this.props.fetchArtworks();
  }

}



const mapStateToProps = state => {
  return ({
    artworks: state.artworks,
    filterCity: state.selectedCity
  })
}

export default connect(mapStateToProps, {fetchArtworks})(Artworks);
