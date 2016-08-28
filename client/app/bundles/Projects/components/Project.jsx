import React, { PropTypes } from 'react';
import _ from 'lodash';

// Simple example of a React "dumb" component
 export default class Project extends React.Component {
  static propTypes = {
    deleteProject: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    _.bindAll(this, 'handleChange', 'deleteProject');
  }

  deleteProject(){
    this.props.deleteProject(this.props.project);
  }

  handleChange(e) {
    // const project = e.target.value;
    // this.props.newProject(project);
  }

  render() {
    const  project  = this.props.project;

    return (
        <a href ='#' className="list-group-item">
          <h4 className="list-group-item-heading">Project Name: {project.name} </h4>
          <span className="pull-right glyphicon glyphicon-remove" onClick={this.deleteProject}/>
          <p className="list-group-item-text">Code Name: {project.code_name}</p>
          <p className="list-group-item-text">Phone: {project.contact_number}</p>
        </a>
    );
  }
}
