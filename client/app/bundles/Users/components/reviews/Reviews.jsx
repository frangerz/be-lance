import React, { PropTypes } from 'react';
import Review from './Review';
import _ from 'lodash';

 export default class Reviews extends React.Component {
  static propTypes = {
  }

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange');
  }

  handleChange(e) {
    // const user = e.target.value;
  }

  renderReviews() {
    return _.map(this.props.reviews, function(review) {
      return <Review review={review} />;
    });
  }

  render() {
    return (
        <div>
          {this.renderReviews}
        </div>
    );
  }
}
