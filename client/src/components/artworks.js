import React, { Component } from 'react'
import artCard from "./artCard.js"

let artworks = []

export default class Artworks extends Component {
  state = {
    artworks: []
  }

  renderArtworks = () => {
    debugger;
    this.setState({
      artworks: artworks
    })
    debugger;
    this.state.artworks.map(work =>
      <h3> work.title, work.category </h3>
    )
  }


  render() {
    return (
      <div>
        {this.renderArtworks()}

      </div>
    );
  }

  componentDidMount() {
    fetch('https://api.artsy.net/api/artworks?size=10%0A', {
      'method': 'GET',
      'headers': {
        'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NDdjZDQxNDcyNjE2OTc4ZmE2YjExMDAiLCJzYWx0X2hhc2giOiJjOGZkMGM3OWNiMzU5MWE1NTJmMDA0ZmZmZTJjYmVmNyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYzNTUyNzYxLCJpYXQiOjE1NzQ1NDc5NjEsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGQ5YjFmOTc1MmI5ZTAwMTEwODI4N2UifQ.1aeR1Dmeum1ZVQqaHI5tcsrk1mbjINzrpuWgPGY1Zco'
      } })
      .then(response => response.json())
      .then(data => {
        debugger;
        artworks = data._embedded.artworks
      })
    }

};
