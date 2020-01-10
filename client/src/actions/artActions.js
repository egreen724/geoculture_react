
export const setArtworks = artworks => {
  return {type: "SET_ARTWORKS", artworks: artworks}
}

export const fetchArtworks = () => {
  return (dispatch) => {
    return fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
      .then(artworks => dispatch(setArtworks(artworks)))
      }
  }


export const setFilterCity = (selectedCity) => {
  return {type: 'SET_FILTER_CITY', selectedCity: selectedCity}
}
