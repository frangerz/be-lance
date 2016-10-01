const RECEIVE_SERVICES = 'RECEIVE_SERVICES'

export function receiveServices(services, areSomeHidden) {
  return {
    type: RECEIVE_SERVICES,
    newServices: services
  }
}
