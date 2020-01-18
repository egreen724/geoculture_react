import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addToFavorites, removeFromFavorites } from "../actions/artActions.js"

class ArtDetail extends Component {

  state = {
    work: []
  }

  buttonDisplay = () => {

    if (this.state.work.favorite === false) {
      return <button onClick={() => this.props.addToFavorites(this.state.work)}>Add to Favorites</button>
    } else {
      return <button onClick={() => this.props.removeFromFavorites(this.state.work)}>Remove from Favorites</button>
    }
  }

  render () {
    return (
      <div className="detail">
        <h3> {this.state.work.title} </h3>
        <div>
          <img className="detail_image" src={this.state.work.thumbnail_url}/>
        </div>
        <div className="detail_info">
          <ul>
              <li>Museum: {this.state.work.collecting_institution}</li>
              <li>Location: {this.state.work.location}</li>
              <li>Medium: {this.state.work.medium}</li>
          </ul>
          <p>{this.buttonDisplay()}</p>
        </div>
      </div>
    )

  }

  componentDidMount() {

    fetch(`http://localhost:3001/api/artworks/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          work: data
        })
      })
    }

}

const mapDispatchToProps = dispatch => ({
  addToFavorites: artwork => dispatch(addToFavorites(artwork)),
  removeFromFavorites: artwork => dispatch(removeFromFavorites(artwork))
})

export default connect()(ArtDetail);
