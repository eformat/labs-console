import React from 'react';
import constants from '../../core/constants';

class BuildCardView extends React.Component {
  static matchHeight() {
    // matchHeight the contents of each .card-pf and then the .card-pf itself
    $(
      ".row-cards-pf > [class*='col'] > .card-pf > .card-pf-body"
    ).matchHeight();
  }

  componentDidUpdate() {
    if (this.props.item === this.props.expandedItem) {
      BuildCardView.matchHeight();
    }
  }

  deploying(projectIndex) {
    const status = this.props.build.project_jobs[this.props.stage.name][
      projectIndex
    ].status;
    return (
      status === constants.ANSIBLE_JOB_STATUS.PENDING ||
      status === constants.ANSIBLE_JOB_STATUS.RUNNING
    );
  }

  render() {
    const { build, stage } = this.props;

    return (
      <div className="row row-cards-pf" style={{ width: '100%' }}>
        {stage.projects.map((project, i) => (
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4"
            key={`stage-${project.name}-${i}`}>
            <div className="card-pf card-pf-view">
              <div className="card-pf-body">
                <div className="card-pf-top-element"
                  style={{ textAlign: 'center' }}>
                  <img src={
                      project.apps &&
                        project.apps.length &&
                        project.apps[0].image
                    }
                    style={{ height: 60 }}
                    alt="provider"/>
                </div>
                <h2 className="card-pf-title text-center">
                  {project.name}
                </h2>
                <div className="card-pf-items text-center">
                  {this.deploying(i) &&
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped active"
                        role="progressbar"
                        style={{ width: '100%' }}>
                        <span>Deploying...</span>
                      </div>
                    </div>}
                </div>
                {!this.deploying(i) &&
                  <div className="card-pf-items text-center">
                    <div className="card-pf-item">
                      <span className="card-pf-item-text">
                        {project.apps.length}
                        {' '}
                        {project.apps.length === 1 ? 'app' : 'apps'}
                      </span>
                    </div>
                    <div className="card-pf-item">
                      {build.project_jobs[stage.name][i].status ===
                        constants.ANSIBLE_JOB_STATUS.SUCCESSFUL &&
                        <span className="fa fa-check"/>}
                      {build.project_jobs[stage.name][i].status !==
                        constants.ANSIBLE_JOB_STATUS.SUCCESSFUL &&
                        <span className="fa fa-times"/>}
                    </div>
                  </div>}
                <br/>
                <div className="card-pf-info">
                  <div style={{ marginRight: 20, display: 'inline' }}>
                    <img src="/img/ansible.png"
                      style={{ height: 22 }}
                      alt="ansible"/>
                  </div>
                  <a href={`https://tower2.strategicdesign.io/#/workflows/${build.project_jobs[stage.name][i].jobId}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    Link to Tower Job
                  </a>
                </div>
                {!this.deploying(i) &&
                  build.project_jobs[stage.name][i].status ===
                    constants.ANSIBLE_JOB_STATUS.SUCCESSFUL &&
                    <div className="card-pf-info">
                      <div style={{ marginRight: 20, display: 'inline' }}>
                        <img src="/img/OpenShift-logo.svg"
                          style={{ height: 22 }}
                          alt="openshift"/>
                      </div>
                      <a href={`https://openshift-master.strategicdesign.io/console/project/${project.name}/overview`}
                        target="_blank"
                        rel="noopener noreferrer">
                      Link to OpenShift project
                    </a>
                    </div>}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BuildCardView;
