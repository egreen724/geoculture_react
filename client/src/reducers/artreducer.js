export default function manageArt(state = {
  artworks: []
}, action){

  switch (action.type) {
      case "SAVE_ARTWORK":
        return {
          ...state,
          artworks: []
        };

      default:
        return state;
    }
}
