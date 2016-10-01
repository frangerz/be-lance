SERVICES_DELETE_SUCCESS = 'SERVICES_DELETE_SUCCESS'

export function servicesDeleteSuccess(service_uuids) {
  return {
    type: SERVICES_DELETE_SUCCESS,
    uuids: service_uuids
  }
}
