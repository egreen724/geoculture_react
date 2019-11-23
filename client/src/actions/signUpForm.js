
const addUserSuccess = user => ({
  type: "ADD_USER_SUCCESS",
  payload: {
    ...user
  }
});

const addUserStarted = () => ({
  type: "ADD_USER_STARTED"
});

const addUserFailure = error => ({
  type: "ADD_USER_FAILURE",
  payload: {
    error
  }
});

export const addUser = ({user}) => {
  return dispatch => {
    dispatch({type: "ADD_USER_STARTED"});
    fetch('http://localhost:3001/api/users.json', {method: 'post', mode: 'no-cors'})
    .then(response => { response.json()})
    .then(user => {dispatch({ type: 'ADD_USER_SUCCESS', user: user })
        })
      };
  }
