export default function manageArt(state = {
  artworks: [], selectedCity: "", favorites: []
}, action){

  switch (action.type) {
      case "SET_ARTWORKS":
        return {
          ...state,
          artworks: action.artworks
        };
      case "SAVE_ARTWORK":
        return {
          ...state,
          artworks: []
        };
      case "FILTER_ARTWORK":
        const filteredArray = state.artworks.map(artwork => {
          if (action.selectedCity === artwork.location) {
            return artwork
          }
        })
        return filteredArray;

      default:
        return state;
    }
}
