import Immutable from 'immutable';

import actionTypes from '../constants/projectsConstants';

export const $$initialState = Immutable.fromJS({
  projects: {},
  project:{},
});

export default function projectsReducer($$state = $$initialState, action) {
  const { type, projects, project} = action;

  switch (type) {
    case actionTypes.REQUEST_PROJECTS:
      return $$state.get('projects');

    case actionTypes.SUBMIT_PROJECT:
      var projectsIndex = $$state.get('projects');
      projectsIndex = projectsIndex.push(project);
      return $$state.set('projects', projectsIndex);

    case actionTypes.DELETE_PROJECT:
      var projectsIndex = $$state.get('projects');
      projectsIndex = _.omit(projectsIndex, project);
      return $$state.get('projects');

    default:
      return $$state;
  }
}
