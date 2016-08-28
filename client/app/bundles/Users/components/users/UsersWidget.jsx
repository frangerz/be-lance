import React, { PropTypes } from 'react';
import User from './User';
import UserDetails from './UserDetails';


import _ from 'lodash';

// Simple example of a React "dumb" component
export default class UsersWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    fetchUsers: PropTypes.func.isRequired,
    submitUser: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    current_user: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange', 'submitUser', 'deleteUser');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    // const user = user;
    // this.props.updateUsers(user);
  }

  submitUser(user) {
    this.props.submitUser(user);
  }

  deleteUser(user) {
    this.props.deleteUser(user);
  }

  renderProfile() {
    const current_user = JSON.parse(JSON.stringify(this.props.current_user));
    const users = JSON.parse(JSON.stringify(this.props.users));
    if (current_user.admin) {
      return (this.renderAdmin(users, current_user));
    } else {
      return this.renderClientProfile(current_user);
    }
  }

  renderClientProfile(current_user) {
    return (
      <div>
        <div className="col-xs-6">
          How Other's See You:
          {this.renderUsers(current_user)}
        </div>
        <div className="col-xs-6">
          {this.renderUserDetails(current_user)}
        </div>
      </div>
    );
  }

  renderAdmin(users, current_user) {
    return (
      <div>
        <div className="col-xs-6">
          {this.renderUsers(users)}
        </div>
        <div className="col-xs-6">
          {this.renderUserDetails(current_user)}
        </div>
      </div>
    );
  }

  renderUsers(users) {
    console.log(users);
    if (typeof(users.admin) != 'undefined' && !users.admin) {
      return (
              <div className="list-group col-xs-12" key={users.id}>
                <User id={users.id} user={users} deleteUser={this.deleteUser}/>
              </div>
            );
    } else {
      var user_list = _.map(users, (user) => {
          return (
                  <div className="list-group col-xs-12" key={user.id}>
                    <User id={user.id} user={user} deleteUser={this.deleteUser}/>
                  </div>
                );
        }
      );
      return user_list;
    }
  }

  renderUserDetails(current_user) {
    return (
      <div className="col-xs-12" key={"form_"+current_user.id}>
        <UserDetails id="user" current_user={current_user} submitUser={this.submitUser}/>
      </div>
    );
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-lg-12">
          {this.renderProfile()}
        </div>
      </div>
    );
  }
}
