import actionTypes from '../constants/buildersConstants';

export function updateBuilders(builders) {
  return {
    type: actionTypes.BUILDERS_UPDATE,
    builders,
  };
}

export function newBuilder(builder) {
  return {
    type: actionTypes.NEW_BUILDER,
    builder,
  };
}

export function deleteBuilder(builder) {
  return {
    type: actionTypes.DELETE_BUILDER,
    builder,
  };
}
