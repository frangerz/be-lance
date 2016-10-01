import mirrorCreator from 'mirror-creator';

const actionTypes = mirrorCreator([
  'REQUEST_SERVICES',
  'RECEIVE_SERVICES',
  'SERVICES_DELETE_START',
  'SERVICES_DELETE_SUCCESS',
  'SERVICES_DELETE_ERROR',
  'SERVICES_SET_SELECTED',
]);

export default actionTypes;
