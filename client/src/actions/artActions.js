//example async fetch action
// export const fetchCats = () => {
//   return (dispatch) => {
//     dispatch({ type: 'LOADING_CATS'})
//     fetch('https://learn-co-curriculum.github.io/cat-api/cats.json').then(response => {
//       return response.json()
//     }).then(responseJSON => {
//       dispatch({ type: 'ADD_CATS', cats: responseJSON.images })
//     })
//   }
// }

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

// successful fetch request from artworks
// fetch('')
//   .then(response => response.json())
  // .then(data => {
  //   artworks = data
  //   this.setState({
  //     artworks: artworks
  //   })
  // })

export const filterArtwork = (selectedCity) => {
  return {type: 'FILTER_ARTWORK', selectedCity: selectedCity}
}
