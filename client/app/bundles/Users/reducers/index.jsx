import usersReducer from './usersReducer';
import { $$initialState as $$usersState } from './usersReducer';

export default {
  $$usersStore: usersReducer,
};

export const initialStates = {
  $$usersState,
};
