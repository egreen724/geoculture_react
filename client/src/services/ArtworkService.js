export default const artworkService = {
  fetchArtworks() {
    return return fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
  }
}
