import React, { PropTypes } from 'react';
import BuildersWidget from '../components/BuildersWidget';
// import Builder from '../components/Builder';
// import NewBuilder from '../components/NewBuilder';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as buildersActionCreators from '../actions/BuildersActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$buildersStore: state.$$buildersStore };
}

// Simple example of a React "smart" component
const Builders = (props) => {
  const { dispatch, $$buildersStore } = props;
  const actions = bindActionCreators(buildersActionCreators, dispatch);
  const { updateBuilders, newBuilder } = actions;
  const builders = $$buildersStore.get('builders');

  return (
    <BuildersWidget {...{ updateBuilders, newBuilder, builders }} />
  );
};

Builders.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$helloWorldStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$buildersStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export HelloWorld, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Builders);
