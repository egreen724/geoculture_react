import React, { Component } from 'react'
import { connect } from 'react-redux'
import Autocomplete from "../components/autocomplete";
import ArtCards from "../components/artCard.js"
import ArtDetail from "../components/artDetail.js"

let cities = []

class ArtworkContainer extends Component {

  state = {
    cities: []
  }

  renderCardsOrDetail = () => {
    debugger;
    if (this.props.selectedWork !== []) {
      return <ArtDetail work={this.props.selectedWork}/>
    } else {
      return <ArtCards />
    }
  }


  render() {
    return (
      <div className="center">
        <Autocomplete suggestions={this.state.cities}/>
        {this.renderCardsOrDetail()}
    

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

const mapStateToProps = state => {
  return ({
    selectedWork: state.selectedWork
  })
}

export default connect(mapStateToProps)(ArtworkContainer);
