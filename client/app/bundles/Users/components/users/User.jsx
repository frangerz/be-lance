import React, { PropTypes } from 'react';
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
        <div className="btn-pref btn-group btn-group-justified btn-group-lg" role="group" aria-label="...">
          <div className="btn-group" role="group">
              <button type="button" id="favorites" className="btn btn-default" href="#tab1" data-toggle="tab"><span className="glyphicon glyphicon-heart" aria-hidden="true"></span>
                  <div className="hidden-xs">Services</div>
              </button>
          </div>
          <div className="btn-group" role="group">
              <button type="button" id="details" className="btn btn-primary" href="#tab2" data-toggle="tab"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>
                  <div className="hidden-xs">Details</div>
              </button>
          </div>
          <div className="btn-group" role="group">
              <button type="button" id="reviews" className="btn btn-default" href="#tab3" data-toggle="tab"><span className="glyphicon glyphicon-star" aria-hidden="true"></span>
                  <div className="hidden-xs">Reviews</div>
              </button>
          </div>
        </div>

        <div className="well">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="tab1">
              <h3>This is tab 1</h3>
            </div>
            <div className="tab-pane fade in" id="tab2">
              <h3>This is tab 2</h3>
            </div>
            <div className="tab-pane fade in" id="tab3">
              <h3>This is tab 3</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
