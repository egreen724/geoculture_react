import React, { Component } from 'react'

class ArtDetail extends Component {

  state = {
    work: []
  }

  buttonDisplay = () => {

    if (this.state.work.favorite === false) {
      return <button onClick={() => this.state.favorite(this.state.work)}>Add to Favorites</button>
    } else {
      return <button onClick={() => this.state.remove(this.state.work)}>Remove from Favorites</button>
    }
  }

  render () {
    return (
      <div>
        <div>
          <img className="detail_image" src={this.state.work.image_url}/>
        </div>
        <div className="detail_info">
          <ul>
              <li>{this.state.work.title}</li>
              <li>{this.state.work.collecting_institution}</li>
              <li>{this.state.work.location}</li>
              <li>{this.state.work.medium}</li>
          </ul>
          <p>{this.buttonDisplay()}</p>
        </div>
      </div>
    )

  }

  componentDidMount() {
    // const id = this.props.match.params.id

    fetch(`http://localhost:3001/api/artworks/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          work: data
        })
      })

    }

}

export default ArtDetail;
