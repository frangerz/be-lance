// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class Builder extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions"
  };

  componentDidMount(){
    console.log(this.props);
  }

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    // const builder = e.target.value;
    // this.props.newBuilder(builder);
  }

  render() {
    const  builder  = this.props.builder;

    return (
        <a href ='#' className="list-group-item">
          <h4 className="list-group-item-heading">Builder Name: {builder.name} </h4>
          <p className="list-group-item-text">Code Name: {builder.code_name}</p>
          <p className="list-group-item-text">Phone: {builder.contact_number}</p>
        </a>
    );
  }
}
