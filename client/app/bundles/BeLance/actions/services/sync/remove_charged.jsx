SERVICES_REMOVE_CHARGED = 'SERVICES_REMOVE_CHARGED'

export function servicesRemoveCharged(service_uuids) {
  return {
    type: SERVICES_REMOVE_CHARGED,
    uuids: service_uuids
  }
}
