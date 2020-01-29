import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import {addToFavorites, removeFromFavorites} from "../actions/artActions.js"

class ArtCard extends Component {

  state = {
    likes: 0
  }

  buttonDisplay = () => {

    if (this.props.work.favorite === false) {
      return <button className="button" onClick={() => this.props.addToFavorites(this.props.work)}>Add to Favorites</button>
    } else {
      return <button className="button" onClick={() => this.props.removeFromFavorites(this.props.work)}>Remove from Favorites</button>
    }
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      return {likes: prevState.likes + 1}
    })
  }

  render () {
    return <div className='container' key={this.props.work.id}>
      <img className="image" src={this.props.work.thumbnail_url}/>
      <div  className='overlay'>
        <div className='textOverlay'>
          {this.state.likes}
          <p>{this.props.work.title} </p>

          <Link to={`/artworks/${this.props.work.id}`} className="button">
           View Details
         </Link>
          <br></br>
          {this.buttonDisplay()}
          <button onClick={this.handleClick}>Like</button>
        </div>
      </div> </div>;
  }

}

export default connect(null, { addToFavorites, removeFromFavorites })(ArtCard) ;
