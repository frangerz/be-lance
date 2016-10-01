SERVICES_SET_SELECTED = 'SERVICES_SET_SELECTED'

export function servicesSetSelected(service_uuids, selectedValue) {
  return {
    type: SERVICES_SET_SELECTED,
    uuids: service_uuids,
    selectedValue: selectedValue
  }
}
