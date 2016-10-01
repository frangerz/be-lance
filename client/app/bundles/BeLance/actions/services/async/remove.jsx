export function removeServices(value) {
  csrfToken = $( 'meta[name="csrf-token"]' ).attr( 'content' )
  return dispatch => {
    //optomistically delete (just mark things as "deleting" and filter them out in the ui)
    dispatch(servicesDeleteStart(value))
    //send the request
    //succeeded so we actually delete the services now
    //if there's an error though we just remove the "deleting" mark from everything
    return fetch('/services/delete', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'X-CSRF-Token': csrfToken,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({uuids: value})
    })
    .then(checkFetchStatus)
    .then(() => dispatch(servicesDeleteSuccess(value)))
    .catch(error => dispatch(servicesDeleteError(value)))
  }
}
