import React, { PropTypes } from 'react';
import Service from './Service';
import _ from 'lodash';

 export default class Services extends React.Component {
  static propTypes = {
  }

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
    // const user = e.target.value;
  }

  renderServices() {
    return _.map(this.props.services, function(service) {
      return <Service service={service} />;
    });
  }

  render() {
    return (
      <div>
        {this.renderServices}
      </div>
    );
  }
}
