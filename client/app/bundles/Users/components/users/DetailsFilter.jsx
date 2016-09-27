import React, { PropTypes } from 'react';
import _ from 'lodash';

 export default class DetailsFilter extends React.Component {
  static propTypes = {
  }

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  }

  // deleteUser(){
  //   this.props.deleteDetail(this.props.user);
  // }

  uploadBegin(){

  }

  uploadProgress(){

  }

  handleChange(e) {
    // const user = e.target.value;
  }

  render() {
    return (
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
    );
  }
}
