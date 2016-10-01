import usersReducer from './usersReducer';
import servicesReducer from './servicesReducer'
import { $$initialState as $$usersState } from './usersReducer';
import { $$initialState as $$servicesState } from './servicesReducer';

export default = [
  $$usersStore: usersReducer,
  $$servicesStore: servicesReducer
];

export const initialStates = [
  $$usersState,
  $$servicesState
];
