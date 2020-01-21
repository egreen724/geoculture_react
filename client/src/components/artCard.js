import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {addToFavorites, removeFromFavorites} from "../actions/artActions.js"

class ArtCard extends Component {

  buttonDisplay = () => {

    if (this.props.work.favorite === false) {
      return <button className="button" onClick={() => this.props.addToFavorites(this.props.work)}>Add to Favorites</button>
    } else {
      return <button className="button" onClick={() => this.props.removeFromFavorites(this.props.work)}>Remove from Favorites</button>
    }
  }

  render () {
    return <div className='container' key={this.props.work.id}>
      <img className="image" src={this.props.work.thumbnail_url}/>
      <div  className='overlay'>
        <div className='textOverlay'>
          <p>{this.props.work.title}, {this.props.work.collecting_institution} </p>
          <br></br>
          <Link to={`/artworks/${this.props.work.id}`} className="button">
           View Details
         </Link>
          <br></br>
          {this.buttonDisplay()}
        </div>
      </div> </div>;
  }

}

export default connect(null, { addToFavorites, removeFromFavorites })(ArtCard) ;
