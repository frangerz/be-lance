import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'REQUEST_USERS',
  'RECEIVE_USERS',
  'FETCH_USERS',
  'CURRENT_USER',
  'SUBMIT_USER',
  'SUBMIT_USER_FAILURE',
  'DELETE_USER',
]);
export default actionTypes;
