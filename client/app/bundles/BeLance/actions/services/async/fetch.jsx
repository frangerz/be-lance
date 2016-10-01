export function fetchServices(value) {
  csrfToken = $( 'meta[name="csrf-token"]' ).attr( 'content' )
  return (dispatch, getState) => {
    let requestId = Math.random().toString(36).substring(7)
    dispatch(requestServices(requestId))
    return fetch('/services_display.json', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // body: JSON.stringify({search_params: value})
    })
    .then(response => response.json())
    .then((json) => {
      //check to see if this value is still the one we want to return (maybe there is later request that is taking longer)
      if(requestId === getState().services.latestRequestId) {
        dispatch(receiveServices(json['services'], someHidden))
      }
      else {
        dispatch({type: 'NO_ACTION'})
      }
    })
  }
}
