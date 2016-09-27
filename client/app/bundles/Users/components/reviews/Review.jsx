import React, { PropTypes } from 'react';
import _ from 'lodash';

 export default class Review extends React.Component {
  static propTypes = {
  }

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
    // const user = e.target.value;
  }

  render() {
    return (
        <div key={"review_"+this.props.review.id}>
          <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
    );
  }
}
