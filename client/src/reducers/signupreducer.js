export default function manageSignUp(state = {
  loading: false,
  users: [],
  error: null
}, action){

  switch (action.type) {
      case "ADD_USER_STARTED":
        return {
          ...state,
          loading: true
        };
      case "ADD_USER_SUCCESS":
        return {
          ...state,
          loading: false,
          error: null,
          users: [...state.users, action.payload]
        };
      case "ADD_USER_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };
      default:
        return state;
    }
}
