SERVICES_DELETE_ERROR = 'SERVICES_DELETE_ERROR'

export function servicesDeleteError(service_uuids) {
  return {
    type: SERVICES_DELETE_ERROR,
    uuids: service_uuids
  }
}
