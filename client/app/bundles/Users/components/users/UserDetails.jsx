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
      <div>
      <div>
        <h1>{title}</h1>
      </div>
      <form>
        <div className="form group row">
          <div id="avatar_user" className="well text-center">
            <i className="glyphicon glyphicon-user" style={{fontSize: '10rem'}}></i>
            <p>Drop Files Here to Upload or</p>
            <div id="dropzone_avatar_user" className="btn btn-primary">
              <span>Choose files</span>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_email" className="col-sm-3 form-control-label">Email Address</label>
          <div className="col-sm-9">
            <input type="email" onChange={this.onChange} className="form-control" id="email" value={this.state.email} placeholder="email@address.com"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_firstname" className="col-sm-3 form-control-label">Firstname</label>
          <div className="col-sm-9">
            <input type="text" onChange={this.onChange} className="form-control" id="firstname" value={this.state.firstname} placeholder="Firstname"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_surname" className="col-sm-3 form-control-label">Surname</label>
          <div className="col-sm-9">
            <input type="text" onChange={this.onChange} className="form-control" id="surname" value={this.state.surname} placeholder="Surname"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_scope" className="col-sm-3 form-control-label">Role</label>
          <div className="col-sm-9">
            <select className="form-control" id="scope" value={this.state.scope} onChange={this.onChange}>
              <option>Service Provider</option>
              <option>Client</option>
            </select>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_password" disabled={disable} className="col-sm-3 form-control-label">Password</label>
          <div className="col-sm-9">
            <input type="password"  onChange={this.onChange} className="form-control" id="password" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="user_password_confirmation" disabled={disable} className="col-sm-3 form-control-label">Password Confirmation</label>
          <div className="col-sm-9">
            <input type="password"  onChange={this.onChange} className="form-control" id="password_confirmation" placeholder="Password"/>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-offset-3 col-sm-12 warning">
            <button type="submit"  onClick={this.onSubmit} className="btn btn-secondary">Submit</button>
          </div>
        </div>
      </form>
      </div>
    );
  }
}
