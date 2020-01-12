import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToFavorites } from "../actions/artActions.js"

class ArtCard extends Component {

  handleFavoriteButton = () => {
    this.props.addToFavorites(this.props.work)
  }

  render () {
    return <div className='container'>
      <img className="image" src={this.props.work.thumbnail_url}/>
      <div key={this.props.work.id} className='overlay'>
        <div className='textOverlay'>
          {this.props.work.title}, {this.props.work.collecting_institution}
          <br></br>
          <button >Details</button>
          <br></br>
          <button onClick={this.handleFavoriteButton}>Add to Favorites</button>
        </div>
      </div> </div>;
  }

}



  // handleDetailClick = (work) => {
  //
  //   this.props.setArtDetail(work)
  //
  //     return <div>
  //       <ArtDetail work={work}/>
  //     </div>
  //
  //
  // }
  const mapStateToProps = state => {
    return ({
      favorites: state.favorites
    })
  }


export default connect(mapStateToProps, {addToFavorites})(ArtCard) ;
