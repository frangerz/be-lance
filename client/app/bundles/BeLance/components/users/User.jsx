import React, { PropTypes } from 'react';
import Details from './Details';
import DetailsFilter from './DetailsFilter';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class User extends React.Component {
  static propTypes = {
  }

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
    // <Details services={this.props.user.services} reviews={this.props.user.reviews} location={this.props.user.location}/>

    let url = 'http://images1.wikia.nocookie.net/__cb20100515195328/lossimpson/es/images/thumb/4/4c/Pedro_Chespirito.png/200px-Pedro_Chespirito.png'
    const  user  = this.props.user;
    return (
      <div className="col-lg-12 col-sm-12">
        <div className="card hovercard">
          <div className="card-background">
              <img className="card-bkimg" alt="" src={url}/>
          </div>
          <div className="useravatar">
              <img alt="" src={url}/>
          </div>
          <div className="card-info"> <span className="card-title">{user.firstname + " " + user.surname}</span>
          </div>
        </div>
        <DetailsFilter />
      </div>
    );
  }
}
