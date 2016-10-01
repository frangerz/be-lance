import Immutable from 'immutable';

import actionTypes from '../constants/usersConstants';

export const $$initialState = Immutable.fromJS({
  users: {},
  user:{},
  current_user: {},
});

export default function usersReducer($$state = $$initialState, action) {
  const { type, users, user, current_user} = action;

  switch (type) {
    case actionTypes.REQUEST_USERS:
      return $$state.get('users');

    case actionTypes.RECEIVE_USERS:
      return $$state.get('users');

    case actionTypes.FETCH_USERS:
      return $$state.get('users');

    case actionTypes.CURRENT_USER:
      return $$state.get('current_user');

    case actionTypes.SUBMIT_USER:
      var usersIndex = $$state.get('users');
      usersIndex = usersIndex.push(user);
      return $$state.set('users', usersIndex);

    case actionTypes.DELETE_USER:
      var usersIndex = $$state.get('users');
      var index = JSON.parse(JSON.stringify(usersIndex))
      index = _.findIndex(index, function(userI) {
        return userI.id == user.id;
      });
      usersIndex = $$state.getIn(['users']).splice(index,1)
      return $$state.set('users', usersIndex)

    default:
      return $$state;
  }
}
