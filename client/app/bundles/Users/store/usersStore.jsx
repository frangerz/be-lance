import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

// See
// https://github.com/gaearon/redux-thunk and http://redux.js.org/docs/advanced/AsyncActions.html

import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'lib/middlewares/loggerMiddleware';

import reducers from '../reducers';
import { initialStates } from '../reducers';

export default props => {
  const { users, current_user }  = props;
  const { $$usersState } = initialStates;
  // Redux expects to initialize the store using an Object, not an Immutable.Map
  const initialState = {
    $$usersStore: $$usersState.merge({
      users, current_user,
    }),
  };

  const reducer = combineReducers(reducers);
  const composedStore = compose(
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  const storeCreator = composedStore(createStore);
  const store = storeCreator(reducer, initialState);
  return store;
};
