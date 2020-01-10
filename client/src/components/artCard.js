import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchArtworks} from "../actions/artActions.js"

class ArtCard extends Component {



  renderArtworks = () => {
    const filteredArray = this.props.artworks.filter(work => work.location === this.props.filterCity)
    
    if (this.props.artworks !== []) {
      this.props.artworks.map((work, index) => {
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

  // const art = props.art.map((work, index) => {
  //     return <div key={index} className='container'>
  //       <img className="image" src={work.thumbnail_url}/>
  //       <div className='overlay'>
  //         <div className='textOverlay'>
  //           {work.title}, {work.collecting_institution}
  //           <br></br>
  //           <a href='/{work.slug}'>Details</a>
  //           <br></br>
  //           <button> Add to Favorites </button>
  //         </div>
  //       </div> </div>;
  // })

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

export default connect(mapStateToProps, {fetchArtworks})(ArtCard);
