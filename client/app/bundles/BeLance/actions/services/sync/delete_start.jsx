SERVICES_DELETE_START = 'SERVICES_DELETE_START'

export function servicesDeleteStart(service_uuids) {
  return {
    type: SERVICES_DELETE_START,
    uuids: service_uuids
  }
}
