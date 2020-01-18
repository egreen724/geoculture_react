export default function manageArt(state = {
  artworks: [], selectedCity: ""
}, action){

  switch (action.type) {
      case "SET_ARTWORKS":
        return {
          ...state,
          artworks: action.artworks
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
      case "ADD_TO_FAVORITES_SUCCESS":

        const newArtworkArr = state.artworks.map(artwork => {
          if (action.artwork.id === artwork.id) {
            const newWork = Object.assign({}, artwork)
            newWork.favorite = true
            return newWork
          } else {
            return artwork
          }})

        return newArtworkArr;

      case "REMOVE_SUCCESS":
        const updatedArray = state.artworks.map(artwork => {
          if (action.artwork.id === artwork.id) {
            const newWork = Object.assign({}, artwork)
            newWork.favorite = false
            return newWork
          } else {
            return artwork
          }})

        return updatedArray;

      default:
        return state;
    }
}
