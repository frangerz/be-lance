// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class UserDetails extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions"
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      username: props.current_user.username || '',
      email: props.current_user.email || '',
      firstname: props.current_user.firstname ||  '',
      surname: props.current_user.surname ||  '',
      scope: props.current_user.scope || 'Client',
      admin: props.current_user.admin || false,
      avatar: props.current_user.avatar || '',
    };

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'onChange', 'onSubmit');
  }

  componentDidMount(){
    // if (document.getElementById('avatar_user')) {
    //   var dropZone = new Dropzone("avatar_user", {
    //     success: this.fileUploadSuccess.bind(this),
    //     clickable:"dropzone_avatar_user",
    //     addedfile: this.uploadBegin.bind(this),
    //     uploadprogress: this.uploadProgress.bind(this),
    //     previewsContainer: false
    //   });
    // }
  }
  fileUploadSuccess(file) {
    this.setState({avatar: file});
  }

  uploadBegin(){

  }

  uploadProgress(){

  }

  // React will automatically provide us with the event `e`
  onSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state);
  }

  onChange(e) {
    // preparing for adding state and state mutations to new user form...
    var val = e.target.value;
    var key = e.target.id;

    var state = this.state;
    state[key] = val;
    this.setState(state);
  }

  render() {
    var disable = false;
    // const  users  = this.props.user;
    if (!this.props.current_user.admin) {
      disable = true;
    } else {
      disable = false;
    }

    var title = `${this.props.current_user.firstname} ${this.props.current_user.surname}'s Details`;
    if (typeof(this.props.current_user.id) != 'number') {
      title = 'New User';
    }

    return (

      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4 className="modal-title" id="exampleModalLabel">{title}</h4>
          </div>
          <div className="modal-body">
          <form>
            <div className="form-group ">
              <label htmlFor="user_username" className="form-control-label">Username</label>
              <input type="text" onChange={this.onChange} className="form-control" id="username" value={this.state.username} placeholder="Username"/>
            </div>
            <div className="form-group ">
              <label htmlFor="user_email" className="form-control-label">Email Address</label>
              <input type="email" onChange={this.onChange} className="form-control" id="email" value={this.state.email} placeholder="email@address.com"/>
            </div>
            <div className="form-group ">
              <label htmlFor="user_firstname" className="form-control-label">Firstname</label>
              <input type="text" onChange={this.onChange} className="form-control" id="firstname" value={this.state.firstname} placeholder="Firstname"/>
            </div>
            <div className="form-group ">
              <label htmlFor="user_surname" className="form-control-label">Surname</label>
              <input type="text" onChange={this.onChange} className="form-control" id="surname" value={this.state.surname} placeholder="Surname"/>
            </div>
            <div className="form-group ">
              <label htmlFor="user_scope" className="form-control-label">Role</label>
                <select className="form-control" id="scope" value={this.state.scope} onChange={this.onChange}>
                  <option>Service Provider</option>
                  <option>Client</option>
                </select>
            </div>
            <div className="form-group ">
              <label htmlFor="user_password" disabled={disable} className="form-control-label">Password</label>
              <input type="password"  onChange={this.onChange} className="form-control" id="password" placeholder="Password"/>
            </div>
            <div className="form-group ">
              <label htmlFor="user_password_confirmation" disabled={disable} className="form-control-label">Password Confirmation</label>
              <input type="password"  onChange={this.onChange} className="form-control" id="password_confirmation" placeholder="Password"/>
            </div>
            <div className="form-group ">
                <button type="submit"  onClick={this.onSubmit} className="btn btn-secondary">Submit</button>
            </div>
          </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Send message</button>
          </div>
        </div>
      </div>

    );
  }
}
