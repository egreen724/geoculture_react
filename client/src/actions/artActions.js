
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

export const setArtDetail = (selectedWork) => {
  return {type: "SET_ART_DETAIL", selectedWork: selectedWork}
}

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
    .then(artwork => dispatch(addToFavoritesSuccess(artwork)))
  }
}

export const addToFavoritesSuccess = (artwork) => {
  return {type: "ADD_TO_FAVORITES_SUCESS", artwork: artwork}
}
