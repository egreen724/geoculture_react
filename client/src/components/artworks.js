import React, { Component } from 'react'
import artCard from "./artCard.js"

export default class Artworks extends Component {

  callArtsy => () {
    fetch('http://api.artsy.net/api/artworks?size=10', {
      method: 'GET',
      headers: {
        'X-Access-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1NDdjZDQxNDcyNjE2OTc4ZmE2YjExMDAiLCJzYWx0X2hhc2giOiJjOGZkMGM3OWNiMzU5MWE1NTJmMDA0ZmZmZTJjYmVmNyIsInJvbGVzIjoidXNlciIsInBhcnRuZXJfaWRzIjpbXSwiZXhwIjoyMzYzNTUyNzYxLCJpYXQiOjE1NzQ1NDc5NjEsImF1ZCI6IjUzZmYxYmNjNzc2ZjcyNDBkOTAwMDAwMCIsImlzcyI6IkdyYXZpdHkiLCJqdGkiOiI1ZGQ5YjFmOTc1MmI5ZTAwMTEwODI4N2UifQ.1aeR1Dmeum1ZVQqaHI5tcsrk1mbjINzrpuWgPGY1Zco'
      } })
      .then(function(response) {
        return response.json()
      })
      .then(function(json) {
        console.log(json)
      })
    }

    componentDidMount() {
      this.callArtsy()
    }

  render() {
    return (
      <div>


      </div>
    );
  }

};
