import React, { PropTypes } from 'react';
import Services from '../services/Services';
import Reviews from '../reviews/Reviews';
import Location from '../location/Location';
import _ from 'lodash';


 export default class Details extends React.Component {
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
        <div className="well">
          <div className="tab-content">
            <div className="tab-pane fade in active" id="tab1">
              <Services services={this.props.services} />
            </div>
            <div className="tab-pane fade in" id="tab2">
              <Location location={{latitude: '34.0151', longitude: '159.1412'}} />
            </div>
            <div className="tab-pane fade in" id="tab3">
              <Reviews reviews={this.props.reviews} />
            </div>
          </div>
        </div>
    );
  }
}
