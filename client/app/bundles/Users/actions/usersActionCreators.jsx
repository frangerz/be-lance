import fetch from 'isomorphic-fetch'
import actionTypes from '../constants/usersConstants';

export function currentUser(current_user) {
  return {
    type: actionTypes.CURRENT_USER,
    current_user,
  };
}

export function requestUsers(users) {
  return {
    type: actionTypes.REQUEST_USERS,
    users,
  };
}

export function receiveUsers(users, json) {
  console.log(json.data.children);

  return {
    type: RECEIVE_USERS,
    users,
    users: json.data.children.map(child => child.data),
  }
}

export function fetchUsers(users) {
  return function(dispatch){
    dispatch(requestUsers(users))
    return fetch(`/users`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => response.json())
      .then(json => dispatch(receiveUsers(users.users, json)))
      .catch(err => {
      });
      return null;
  }
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
    }).then(response => response.json())
      .catch(err => {
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

export function deleteUserOptimistic(user) {
  return {
    type: actionTypes.DELETE_USER,
    user,
  };
}
