// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class NewBuilder extends React.Component {
  static propTypes = {
    newBuilder: PropTypes.func.isRequired,

    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions"
  };

  componentDidMount(){
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      builder_name: '',
      code_name: '',
      contact_number:''
    };

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'onChange', 'onSubmit');
  }

  // React will automatically provide us with the event `e`
  onSubmit(e) {
    e.preventDefault();
    this.props.newBuilder(this.state);
  }

  onChange(e) {
    // preparing for adding state and state mutations to new Builder form...
    var val = e.target.value;
    var key = e.target.id;

    var state = this.state;
    state[key] = val;
    this.setState(state);
    console.log(state);
  }

  render() {

    // const  Builders  = this.props.Builder;

    return (
      <form>
      <div className="form-group row">
          <label for="builder_name" className="col-sm-3 form-control-label">Builder Name</label>
          <div className="col-sm-9">
            <input type="text" onChange={this.onChange} className="form-control" id="name" placeholder="New Builder Name"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="code_name" className="col-sm-3 form-control-label">Code Name</label>
          <div className="col-sm-9">
            <input type="text"  onChange={this.onChange} className="form-control" id="code_name" placeholder="Code Number"/>
          </div>
        </div>
        <div className="form-group row">
          <label for="contact_number" className="col-sm-3 form-control-label">Contact Number</label>
          <div className="col-sm-9">
            <input type="text"  onChange={this.onChange} className="form-control" id="contact_number" placeholder="Phone Number"/>
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-offset-3 col-sm-12 warning">
            <button type="submit"  onClick={this.onSubmit} className="btn btn-secondary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
