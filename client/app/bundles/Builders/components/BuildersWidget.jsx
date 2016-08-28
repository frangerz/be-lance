// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import Builder from './Builder';
import NewBuilder from './NewBuilder';


import _ from 'lodash';

// Simple example of a React "dumb" component
export default class BuildersWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateBuilders: PropTypes.func.isRequired,
    newBuilder: PropTypes.func.isRequired,
    builders: PropTypes.object.isRequired,
  };

  componentDidMount(){
    console.log(this.props);
  }

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange', 'newBuilder');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    // const builder = builder;
    // this.props.updateBuilders(builder);
  }

  newBuilder(builder) {
    console.log(builder);
    this.props.newBuilder(builder);
  }

  renderBuilders(builders) {
    console.log(builders);

    var red = _.map(builders.builders, (builder) => {
        return (
                <div className="list-group col-xs-12" key={builder.id}>
                  <Builder id={builder.id} builder={builder}/>
                </div>
              );
      }
    );

    console.log(red);
    return red;
  }

  renderNewBuilder() {
    return (
      <div className="col-xs-12" key="form">
        <NewBuilder id="new_proj" newBuilder={this.newBuilder}/>
      </div>
    );
  }

  render() {
    const builders = JSON.parse(JSON.stringify(this.props));

    return (
      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="col-xs-6">
            {this.renderBuilders(builders)}
          </div>
          <div className="col-xs-6">
            {this.renderNewBuilder()}
          </div>
        </div>
      </div>
    );
  }
}
