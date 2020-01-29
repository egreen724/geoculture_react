// Art Actions

export const setArtworks = artworks => {
  return {type: "SET_ARTWORKS", artworks: artworks}
}

export const fetchArtworks = () => {
  console.log('c')
  return (dispatch) => {
    return fetch('http://localhost:3001/api/artworks')
      .then(response => response.json())
      .then(artworks => {
        console.log('d')
        dispatch(setArtworks(artworks))
      })
    }
    console.log('e')
  }

// Filter Actions

export const setFilterCity = (selectedCity) => {
  return {type: 'SET_FILTER_CITY', selectedCity: selectedCity}
}

export const clearFilterCity = () => {
  return {type: 'CLEAR_FILTER_CITY', selectedCity: ""}
}

// Favorite Actions

export const addToFavorites = (artwork) => {
  return (dispatch) => {

    const favorite = {...artwork, favorite: true}

    return fetch(`http://localhost:3001/api/artworks/${artwork.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({artwork: favorite})
    })
    .then(response => response.json())
    .then(artwork => dispatch(changeSuccess(artwork)))
  }
}

export const changeSuccess = (artwork) => {
  return {type: "CHANGE_SUCCESS", artwork: artwork}
}

export const removeFromFavorites = (artwork) => {
  return (dispatch) => {

    const favorite = {...artwork, favorite: false}

    return fetch(`http://localhost:3001/api/artworks/${artwork.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({artwork: favorite})
    })
    .then(response => response.json())
    .then(artwork => dispatch(changeSuccess(artwork)))
  }
}
