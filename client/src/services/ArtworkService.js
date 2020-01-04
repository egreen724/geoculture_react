export default const artworkService = {
  fetchArtworks() {
    return return fetch('/api/v1/artworks')
      .then(response => response.json())
  }
}
