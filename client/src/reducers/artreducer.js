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
      case "SET_FILTER_CITY":
        debugger; 
        // const filteredArray = state.artworks.map(artwork => {
        return {
          ...state,
          selectedCity: action.selectedCity
        }

      default:
        return state;
    }
}
