import Immutable from 'immutable';
import actionTypes from '../constants/servicesConstants';

export const $$initialState = Immutable.fromJS({
  isFetching: false,
  latestRequestId: '',
  services: [],
  deletingService: [],
  selectedServices: [],
});

export default function servicesReducer($$state = $$initialState, action) {
  switch (action.type) {
    case REQUEST_SERVICES:
      return { ...$$state, isFetching: true, latestRequestId: action.requestId };
    case RECEIVE_SERVICES:
      return {...$$state, isFetching: false, services: action.newServices, areSomeHidden: action.areSomeHidden};
    case SERVICES_DELETE_START:
      newState = {...$$state}
      //add SERVICE uuids to deleting array for the ones we want to delete
      newState.deletingServices = newState.deletingServices.concat(action.uuids)
      return newState
    case SERVICES_DELETE_SUCCESS:
      newState = {...$$state, services: [...$$state.services], deletingServices: [...$$state.deletingServices], selectedServices: [...$$state.selectedServices]}
      //remove deleted services from state
      for(i = 0; i < newState.services.length; ) {
        if(action.uuids.indexOf(newState.services[i].uuid) > -1) {
          newState.services.splice(i, 1)
        } else { i++ }
      }
      //remove deleted service uuids from deleting array
      for(i = 0; i < newState.deletingServices.length; ) {
        if(action.uuids.indexOf(newState.deletingServices[i]) > -1) {
          newState.deletingServices.splice(i, 1)
        } else { i++ }
      }
      //deselect any of the services if they were selected
      for(i = 0; i < newState.selectedServices.length; ) {
        if(action.uuids.indexOf(newState.selectedServices[i]) > -1) {
          newState.selectedServices.splice(i, 1)
        } else { i++ }
      }
      return newState
    case SERVICES_DELETE_ERROR:
      //TODO: Add some sort of error message, probably a centralized pop over component
      newState = {...$$state, deletingServices: [...$$state.deletingServices]}
      //remove deleted service uuids from deleting array
      for(i = 0; i < newState.deletingServices.length;) {
        if(action.uuids.indexOf(newState.deletingServices[i]) > -1) {
          newState.deletingServices.splice(i, 1)
        } else { i++ }
      }
      return newState
    case SERVICES_SET_SELECTED:
      newState = {...$$state, selectedServices: [...$$state.selectedServices]}
      //if selectedValue is true push all the uuids to the selected array that aren't already in there
      if(action.selectedValue) {
        for(uuid of action.uuids) {
          if(newState.selectedServices.indexOf(uuid) === -1) {
            newState.selectedServices.push(uuid)
          }
        }
      }
      //else take out all the uuids that are in there if they are in there
      else {
        for(i = 0; i < newState.selectedServices.length; ) {
          if(action.uuids.indexOf(newState.selectedServices[i]) > -1) {
            newState.selectedServices.splice(i, 1)
          } else { i++ }
        }
      }
      return newState
    default:
      return state
  }
}
