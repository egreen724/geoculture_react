export default function manageArt(state = {
  artworks: [], favorites: [], selectedCity: ""
}, action){

  switch (action.type) {
      case "SET_ARTWORKS":
        return {
          ...state,
          artworks: action.artworks,
          favorites: action.artworks.filter(artwork => artwork.favorite === true )
        };

      case "SET_FILTER_CITY":
        return {
          ...state,
          selectedCity: action.selectedCity
        }

      case "CLEAR_FILTER_CITY":
        return {
          ...state,
          selectedCity: ""
        }

      case "CHANGE_SUCCESS":
        let newFavoritesArray = state.favorites

          if (action.artwork.favorite === false) {
            newFavoritesArray = state.favorites.map(artwork => {
              if (action.artwork.id === artwork.id) {
                const newWork = Object.assign({}, artwork)
                newWork.favorite = false
                return newWork
              } else {
                return artwork
              }
              debugger;
            })
          } else {
            const newWork = Object.assign({}, action.artwork)
            newWork.favorite = true
            newFavoritesArray.push(newWork)
            return newFavoritesArray
          }

        return {
          ...state,
          favorites: newFavoritesArray.filter(artwork => artwork.favorite === true )
        };


      default:
        return state;
    }
}
