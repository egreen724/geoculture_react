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

      case "ADD_TO_FAVORITES_SUCCESS":

        // const newArtworkArr = state.artworks.map(artwork => {
        //   if (action.artwork.id === artwork.id) {
        //     const newWork = Object.assign({}, artwork)
        //     newWork.favorite = true
        //     return newWork
        //   } else {
        //     return artwork
        //   }})

        return {
          ...state,
          favorites: state.artworks.filter(artwork => artwork.favorite === true )
        };

      case "REMOVE_SUCCESS":
        // const updatedArray = state.artworks.map(artwork => {
        //   if (action.artwork.id === artwork.id) {
        //     const newWork = Object.assign({}, artwork)
        //     newWork.favorite = false
        //     return newWork
        //   } else {
        //     return artwork
        //   }})

          return {
            ...state,
            favorites: state.artworks.filter(artwork => artwork.favorite === true )
          };

      default:
        return state;
    }
}
