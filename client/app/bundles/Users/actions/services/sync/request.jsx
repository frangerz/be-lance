const REQUEST_SERVICES = 'REQUEST_SERVICES'
export function requestServices(requestId) {
  return {
    type: REQUEST_SERVICES,
    requestId: requestId
  }
}
