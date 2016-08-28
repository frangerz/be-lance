import projectsReducer from './projectsReducer';
import { $$initialState as $$projectsState } from './projectsReducer';

export default {
  $$projectsStore: projectsReducer,
};

export const initialStates = {
  $$projectsState,
};
