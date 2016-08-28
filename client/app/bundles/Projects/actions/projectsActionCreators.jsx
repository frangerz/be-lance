import fetch from 'isomorphic-fetch'
import actionTypes from '../constants/projectsConstants';



export function requestProjects(projects) {
  return {
    type: actionTypes.REQUEST_PROJECTS,
    projects,
  };
}

export function submitProjectOptimistic(project) {
  return {
    type: actionTypes.SUBMIT_PROJECT,
    project,
  };
}

export function submitProject(project) {
  return function(dispatch) {
    dispatch(submitProjectOptimistic(project));
    fetch('/projects', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        project,
      })
    }).then(response => {

    }).catch(err => {

    });
    return null;
  }
}

export function deleteProject(project) {
  return function(dispatch) {
    dispatch(deleteProjectOptimistic(project));
    fetch('/projects/'+project.id+'.json', {
      method: 'DELETE',
    }).then(response => {

    }).catch(err => {

    });
    return null;
  }
}

export function submitProjectFailure(error) {
  return {
    type: actionTypes.SUBMIT_PROJECT_FAILURE,
    project,
  };
}


export function deleteProjectOptimistic(project) {
  return {
    type: actionTypes.DELETE_PROJECT,
    project,
  };
}
