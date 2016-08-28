import React, { PropTypes } from 'react';
import ProjectsWidget from '../components/ProjectsWidget';
// import Project from '../components/Project';
// import NewProject from '../components/NewProject';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as projectsActionCreators from '../actions/ProjectsActionCreators';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  // Note the use of `$$` to prefix the property name because the value is of type Immutable.js
  return { $$projectsStore: state.$$projectsStore };
}

// Simple example of a React "smart" component
const Projects = (props) => {
  const { dispatch, $$projectsStore } = props;
  const actions = bindActionCreators(projectsActionCreators, dispatch);
  const { requestProjects, submitProject, deleteProject } = actions;
  const projects = $$projectsStore.get('projects');

  return (
    <ProjectsWidget {...{requestProjects, submitProject, deleteProject, projects }} />
  );
};

Projects.propTypes = {
  dispatch: PropTypes.func.isRequired,

  // This corresponds to the value used in function select above.
  // We prefix all property and variable names pointing to Immutable.js objects with '$$'.
  // This allows us to immediately know we don't call $$projectsStore['someProperty'], but
  // instead use the Immutable.js `get` API for Immutable.Map
  $$projectsStore: PropTypes.instanceOf(Immutable.Map).isRequired,
};

// Don't forget to actually use connect!
// Note that we don't export projects, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(select)(Projects);
