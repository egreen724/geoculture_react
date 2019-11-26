import React, { Component } from 'react';


class ArtCard extends Component {

  render() {
    debugger;
    const { artwork } = this.props;
    debugger;
    return (
      <div>
        <p> art test </p>
        <li> {artwork.title}, {artwork.category} </li>
      </div>
    )
  }


}

export default ArtCard;
