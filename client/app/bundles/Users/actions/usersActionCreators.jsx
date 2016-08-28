import fetch from 'isomorphic-fetch'
import actionTypes from '../constants/usersConstants';



export function requestUsers(users) {
  return {
    type: actionTypes.REQUEST_USERS,
    users,
  };
}

export function currentUser(current_user) {
  debugger;
  
  return {
    type: actionTypes.CURRENT_USER,
    current_user,
  };
}

export function submitUserOptimistic(user) {
  return {
    type: actionTypes.SUBMIT_USER,
    user,
  };
}

export function submitUser(user) {
  return function(dispatch) {
    dispatch(submitUserOptimistic(user));
    fetch('/users', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user,
      })
    }).then(response => {

    }).catch(err => {

    });
    return null;
  }
}

export function deleteUser(user) {
  return function(dispatch) {
    dispatch(deleteUserOptimistic(user));
    fetch('/users/'+user.id+'.json', {
      method: 'DELETE',
    }).then(response => {

    }).catch(err => {

    });
    return null;
  }
}

export function submitUserFailure(error) {
  return {
    type: actionTypes.SUBMIT_USER_FAILURE,
    user,
  };
}


export function deleteUserOptimistic(user) {
  return {
    type: actionTypes.DELETE_USER,
    user,
  };
}
