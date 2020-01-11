import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchArtworks} from "../actions/artActions.js"

class ArtCards extends Component {



  renderArtworks = () => {
    let filteredArray = []

    if (this.props.filterCity !== "") {
      filteredArray = this.props.artworks.filter(work => work.location === this.props.filterCity)
    } else if (this.props.artworks !== []){
      filteredArray = this.props.artworks
    }


    if (filteredArray !== []) {
      filteredArray.map((work, index) => {
          return <div key={index} className='container'>
            <img className="image" src={work.thumbnail_url}/>
            <div className='overlay'>
              <div className='textOverlay'>
                {work.title}, {work.collecting_institution}
                <br></br>
                <a href='/{work.slug}'>Details</a>
                <br></br>
                <button> Add to Favorites </button>
              </div>
            </div> </div>;
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

  componentDidMount() {
    this.props.fetchArtworks()
    }


}

const mapStateToProps = state => {
  return ({
    artworks: state.artworks,
    filterCity: state.selectedCity
  })
}

export default connect(mapStateToProps, {fetchArtworks})(ArtCards);
