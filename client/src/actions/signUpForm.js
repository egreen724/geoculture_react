
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
    dispatch(addUserStarted())
    fetch('http://localhost:3001/api/user.json', {method: 'post'})
      .then(response => {
        return response.json()
      })
      .then(responseJSON => {
        console.log(responseJSON)
      })
  }
}
