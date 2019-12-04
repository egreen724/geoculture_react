export default function manageArt(state = {
  artworks: []
}, action){

  switch (action.type) {
      case "ADD_ARTWORK":
        return {
          ...state,
          artworks: []
        };
    
      default:
        return state;
    }
}
