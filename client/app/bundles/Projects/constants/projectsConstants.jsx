import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'REQUEST_PROJECTS',
  'SUBMIT_PROJECT',
  'SUBMIT_PROJECT_FAILURE',
  'DELETE_PROJECT',
]);
export default actionTypes;
