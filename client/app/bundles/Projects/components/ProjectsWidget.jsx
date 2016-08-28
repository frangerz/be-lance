import React, { PropTypes } from 'react';
import Project from './Project';
import NewProject from './NewProject';


import _ from 'lodash';

// Simple example of a React "dumb" component
export default class ProjectsWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    requestProjects: PropTypes.func.isRequired,
    submitProject: PropTypes.func.isRequired,
    deleteProject: PropTypes.func.isRequired,
    projects: PropTypes.object.isRequired,
  };

  componentDidMount(){
    console.log(this.props);
  }

  constructor(props, context) {
    super(props, context);

    // Uses lodash to bind all methods to the context of the object instance, otherwise
    // the methods defined here would not refer to the component's class, not the component
    // instance itself.
    _.bindAll(this, 'handleChange', 'submitProject', 'deleteProject');
  }

  // React will automatically provide us with the event `e`
  handleChange(e) {
    // const project = project;
    // this.props.updateProjects(project);
  }

  submitProject(project) {
    this.props.submitProject(project);
  }

  deleteProject(project) {
    this.props.deleteProject(project);
  }

  renderProjects(projects) {
    var project_list = _.map(projects.projects, (project) => {
        return (
                <div className="list-group col-xs-12" key={project.id}>
                  <Project id={project.id} project={project} deleteProject={this.deleteProject}/>
                </div>
              );
      }
    );
    return project_list;
  }

  renderNewProject() {
    return (
      <div className="col-xs-12" key="form">
        <NewProject id="new_proj" submitProject={this.submitProject}/>
      </div>
    );
  }

  render() {
    const projects = JSON.parse(JSON.stringify(this.props));

    return (
      <div className="container-fluid">
        <div className="col-lg-12">
          <div className="col-xs-6">
            {this.renderProjects(projects)}
          </div>
          <div className="col-xs-6">
            {this.renderNewProject()}
          </div>
        </div>
      </div>
    );
  }
}
