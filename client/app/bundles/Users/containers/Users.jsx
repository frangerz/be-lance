import React, { PropTypes } from 'react';
import UsersWidget from '../components/users/UsersWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as usersActionCreators from '../actions/UsersActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$usersStore: state.$$usersStore };
}

// Simple example of a React "smart" component
const Users = (props) => {
  const { dispatch, $$usersStore } = props;
  const actions = bindActionCreators(usersActionCreators, dispatch);
  const { fetchUsers, currentUser, submitUser, deleteUser } = actions;
  const users = $$usersStore.get('users');
  const current_user = $$usersStore.get('current_user');
  return (
    <UsersWidget {...{fetchUsers, submitUser, deleteUser, users, current_user }} />
  );
};

Users.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$usersStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$usersStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export users, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Users);
