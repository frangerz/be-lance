import Immutable from 'immutable';

import actionTypes from '../constants/buildersConstants';

export const $$initialState = Immutable.fromJS({
  builders: {}, // this is the default state that would be used if one were not passed into the store
});

export default function buildersReducer($$state = $$initialState, action) {
  const { type, builders, builder } = action;

  switch (type) {
    case actionTypes.BUILDERS_UPDATE:
      return $$state.set('builders', builders);

    case actionTypes.NEW_BUILDER:
      var buildersIndex = $$state.get('builders');
      buildersIndex = buildersIndex.push(builder);
      return $$state.set('builders', buildersIndex);

    case actionTypes.DELETE_BUILDER:
      return $$state.set('builders', builders);

    default:
      return $$state;
  }
}
