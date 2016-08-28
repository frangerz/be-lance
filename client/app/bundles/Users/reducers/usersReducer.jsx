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

    case actionTypes.CURRENT_USER:
      return $$state.get('current_user');

    case actionTypes.SUBMIT_USER:
      var usersIndex = $$state.get('users');
      usersIndex = usersIndex.push(user);
      return $$state.set('users', usersIndex);

    case actionTypes.DELETE_USER:
      var usersIndex = $$state.get('users');
      usersIndex = _.omit(usersIndex, user);
      return $$state.get('users');

    default:
      return $$state;
  }
}
