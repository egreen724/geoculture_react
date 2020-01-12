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
        return {
          ...state,
          selectedCity: action.selectedCity
        }
      // case "SET_ART_DETAIL":
      // return {
      //   ...state,
      //   selectedWork: action.selectedWork
      // }
      case "ADD_TO_FAVORITES":
      debugger; 
        return {
          ...state,
          favorites: action.artwork
        }


      default:
        return state;
    }
}
