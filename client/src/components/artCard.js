import React, { Component } from 'react'

class ArtCard extends Component {

  buttonDisplay = () => {

    if (this.props.work.favorite === false) {
      return <button onClick={() => this.props.favorite(this.props.work)}>Add to Favorites</button>
    } else {
      return <button onClick={() => this.props.remove(this.props.work)}>Remove from Favorites</button>
    }
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
          {this.buttonDisplay()}
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



export default ArtCard ;
