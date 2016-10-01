import React, { PropTypes } from 'react';
import UsersWidget from '../components/users/UsersWidget';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as usersActionCreators from '../actions/UsersActionCreators';
import * as servicesActionCreators from '../actions/ServicesActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return
        {
          $$usersStore: state.$$usersStore,
          $$servicesStore: state.$$servicesStore,
        };
}

const BeLance = (props) => {
  const { dispatch, $$beLanceStore, } = props;
  const actions = bindActionCreators(usersActionCreators, servicesActionCreators, dispatch);
  const { fetchUsers, currentUser, submitUser, deleteUser } = actions;
  const users = JSON.parse(JSON.stringify($$usersStore.get('users')));
  const current_user = JSON.parse(JSON.stringify($$usersStore.get('current_user')));
  return (
    <UsersWidget {...{fetchUsers, submitUser, deleteUser, users, current_user }} />
  );
};

BeLance.propTypes = {
  dispatch: PropTypes.func.isRequired,
  $$usersStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  $$servicesStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export users, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(BeLance);
