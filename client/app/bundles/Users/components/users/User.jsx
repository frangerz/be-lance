import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class User extends React.Component {
  static propTypes = {
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange', 'deleteUser');
  }

  deleteUser(){
    this.props.deleteUser(this.props.user);
  }


  fileUploadSuccess(){

  }

  uploadBegin(){

  }

  uploadProgress(){

  }

  handleChange(e) {
    // const user = e.target.value;
  }

  uploadOrganisationLogo() {

  }

  userAdmin() {
    if (this.props.user.admin) {
      return (
        <p className="list-group-item-text">Administrator</p>
      );
    } else {
      return (
        ''
      );
    }
  }

  render() {
    const  user  = this.props.user;
    return (
        <div className="list-group-item">
          <h4 className="list-group-item-heading">{user.firstname + " " + user.surname} </h4>
          <span className="pull-right glyphicon glyphicon-remove" onClick={this.deleteUser}/>
          <p className="list-group-item-text">Role: {user.scope}</p>
          <div id="user_avatar" />
          {this.userAdmin()}
        </div>
    );
  }
}
