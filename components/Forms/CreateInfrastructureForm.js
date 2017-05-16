import React, { PropTypes } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import labsApi from '../../data/index';
import c from '../../pages/common.css';
import constants from '../../core/constants';
import cx from 'classnames';

class CreateInfrastructureForm extends React.Component {

  state = {
    newInfrastructure: {},
    showClientSecret: false,
    isNew: false
  };

  static propTypes = {
    handleSubmit: React.PropTypes.func,
    handleCancel: React.PropTypes.func,
    value: React.PropTypes.object
  };

  componentDidMount() {
    this.setPickers();
  }

  componentDidUpdate() {
    this.setPickers();
  }

  componentWillMount() {
    let newInfrastructure = Object.assign({}, this.props.value);
    let isNew = !newInfrastructure.hasOwnProperty('id');

    if(isNew){
      newInfrastructure.master_nodes = 1;
      newInfrastructure.compute_nodes = 3;
    }    
    this.setState({newInfrastructure: newInfrastructure, isNew: isNew});
    this.checkCreateEnabled(newInfrastructure, isNew);
  }

  setPickers() {
    $('.selectpicker').selectpicker('render');
  }

  handleSubmit = (event) => {
    if(this.state.isNew && this.state.createEnabled){
      let infrastructureApi = new labsApi.InfrastructureApi();
      let jobApi = new labsApi.JobApi();

      let infra = Object.assign({}, this.state.newInfrastructure);

      //call the JobsApi to create the Job in Tower, and associate Job ID
      jobApi.addInfrastructureJob({ body: {}}, (e, job, res) => {
        infra.status = job.status;
        infra.tower_job_id = job.id;
        infra.datetime_started = job.created;

        infrastructureApi.addInfrastructure({'body': infra}, (e) => {
          //todo: display an error
          if (e) console.error(e);
          this.props.handleSubmit(event);
        });
      });
    }
    event.preventDefault();
  };

  checkCreateEnabled = (newInfrastructure, isNew) => {
    if(isNew && newInfrastructure && newInfrastructure.name 
      && newInfrastructure.provider
      && (
        (newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.AWS.KEY
          && newInfrastructure.aws_region
        ) 
        || newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.GOOGLE_CLOUD.KEY
        || newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.AZURE.KEY
        || newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.OPENSTACK.KEY
        || newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.RHEV.KEY
        || newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.VMWARE.KEY
      )
      && newInfrastructure.public_hosted_zone 
      && newInfrastructure.authenication_provider
      && (
        (
          newInfrastructure.authenication_provider === 'GitHub' 
          && newInfrastructure.github_client_id
          && newInfrastructure.github_client_secret
          && newInfrastructure.github_organization
        ) 
        || newInfrastructure.authenication_provider === 'HTTPD'
      )
    && newInfrastructure.compute_nodes >= 0
    )
    {
      this.setState({createEnabled: true})
    } else {
      this.setState({createEnabled: false})
    }
  }

  handleChange = (e, prop) => {
    let o = Object.assign({}, this.state.newInfrastructure);
    o[prop] = e.target.value;
    this.setState({ newInfrastructure: o });
    this.checkCreateEnabled(o, this.state.isNew);
  };

  handleCheckChanged = (e, prop) => {
    let newInfrastructure = Object.assign({},this.state.newInfrastructure);
    newInfrastructure[prop] = e.target.checked ? true: false;

    if(prop === 'highly_available'){ 
      //highly available / master_nodes business logic
      newInfrastructure.master_nodes = e.target.checked ? 3 : 1;
    }
    newInfrastructure.datetime_started = new Date();

    this.setState({newInfrastructure: newInfrastructure});
  };  

  showClientSecretClick(e) {
    e.preventDefault();
    this.setState(function(prevState){
      return {showClientSecret: !prevState.showClientSecret}
   });
  }

  render() {
    return (
      <form role="form" className="form-horizontal">
        <div className="form-group">
          <label htmlFor="infraName" className="col-sm-2 control-label required-pf">Infrastructure Name</label>
          <div className="col-sm-8 col-md-6">
            <input type="text" className="form-control" id="infraName" required=""
              value={this.state.newInfrastructure.name}
              onChange={(e) => { this.handleChange(e, 'name') } }
              disabled={!this.state.isNew} />
          </div>
        </div>
        <div className="form-group" style={{height: 85}}>
          <label htmlFor="provider" className="col-sm-2 control-label required-pf">Provider Platform</label>
          <div className="col-sm-8 col-md-6">
            <select id="provider" value={this.state.newInfrastructure.provider} className="selectpicker form-control"
              onChange={(e) => { this.handleChange(e, 'provider') } }
              disabled={!this.state.isNew}>
              <option></option>
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/aws.svg' width='90' height='63'/>
                  </div>
                  <span>Amazon Web Services</span>
                </div>">
                Amazon Web Services
              </option>
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/google-cloud.png' width='50' height='50'/>
                  </div>
                  <span>Google Cloud Platform</span>
                </div>">
                Google Cloud Platform
              </option>
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/azure.svg' width='50' height='50'/>
                  </div>
                  <span>Microsoft Azure</span>
                </div>">
                Microsoft Azure
              </option>   
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/openstack.png' width='50' height='50'/>
                  </div>
                  <span>Red Hat OpenStack Platform</span>
                </div>">
                Red Hat OpenStack Platform
              </option>
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/shadowman.svg' width='50' height='50'/>
                  </div>
                  <span>Red Hat Virtualization</span>
                </div>">
                Red Hat Virtualization
              </option> 
              <option data-content="<div>
                  <div class='provider-image'>
                    <img src='/img/vmware.png' width='70' height='63'/>
                  </div>
                  <span>VMware</span>
                </div>">
                VMware
              </option>
            </select>
          </div>
        </div>
        {this.state.newInfrastructure.provider === constants.INFRASTRUCTURE_TYPES.AWS.KEY &&
        <div className="form-group">
          <label htmlFor="region" className="col-sm-2 control-label required-pf">AWS Region</label>
          <div className="col-sm-8 col-md-6">
            <select id="region" value={this.state.newInfrastructure.aws_region} className="selectpicker form-control"
              onChange={(e) => { this.handleChange(e, 'aws_region') } }
              disabled={!this.state.isNew}>
              <option></option>
              <option value='us-east-1'>us-east-1 (US East, N. Virgina)</option>
              <option value='us-east-2'>us-east-2 (US East, Ohio)</option>
              <option value='us-west-1'>us-west-1 (US West, N. California)</option>
              <option value='us-west-2'>us-west-2 (US West, Oregon)</option>
              <option value='ap-south-1'>ap-south-1 (Asia Pacific, Mumbai)</option>
              <option value='ap-northeast-1'>ap-northeast-1 (Asia Pacific, Tokyo)</option>
              <option value='ap-northeast-2'>ap-northeast-2 (Asia Pacific, Seoul)</option>
              <option value='ap-southeast-1'>ap-southeast-1 (Asia Pacific, Singapore)</option>
              <option value='ap-southeast-2'>ap-southeast-2 (Asia Pacific, Sydney)</option>
              <option value='eu-central-1'>eu-central-1 (EU, Frankfurt)</option>
              <option value='eu-west-1'>eu-west-1 (EU, Ireland)</option>
              <option value='eu-west-2'>eu-west-2 (EU, London)</option>
            </select>
          </div>
        </div>
        }
        <div className="form-group">
          <label htmlFor="zone" className="col-sm-2 control-label required-pf">Public Hosted Zone</label>
          <div className="col-sm-8 col-md-6">
            <input type="text" className="form-control" id="zone" required="" placeholder=""
              value={this.state.newInfrastructure.public_hosted_zone}
              onChange={(e) => { this.handleChange(e, 'public_hosted_zone') } } 
              disabled={!this.state.isNew}/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="authenication_provider" className="col-sm-2 control-label required-pf">Authenication Provider</label>
          <div className="col-sm-8 col-md-6">
            <select id="authenication_provider" value={this.state.newInfrastructure.authenication_provider} className="selectpicker form-control"
              onChange={(e) => { this.handleChange(e, 'authenication_provider') } }
              disabled={!this.state.isNew}>
              <option></option>
              <option>GitHub</option>
              <option>HTTPD</option>
            </select>
          </div>
        </div>  
        {this.state.newInfrastructure.authenication_provider === 'GitHub' &&
        <div className="form-group">
          <label htmlFor="github_client_id" className="col-sm-2 control-label required-pf">GitHub Client ID</label>
          <div className="col-sm-8 col-md-6">
            <input type="text" className="form-control" id="github_client_id" required="" placeholder=""
              value={this.state.newInfrastructure.github_client_id}
              onChange={(e) => { this.handleChange(e, 'github_client_id') } } 
              disabled={!this.state.isNew}/>
          </div>
        </div>
        }   
        {this.state.newInfrastructure.authenication_provider === 'GitHub' &&
        <div className="form-group">
          <label htmlFor="github_client_secret" className="col-sm-2 control-label required-pf">GitHub Client Secret</label>
          <div className="col-sm-8 col-md-6">
            <input type={this.state.showClientSecret ? 'text' : 'password'} className="form-control" id="github_client_secret" required="" placeholder=""
              value={this.state.newInfrastructure.github_client_secret}
              onChange={(e) => { this.handleChange(e, 'github_client_secret') } } 
              disabled={!this.state.isNew}/>
          </div>
          <div className="col-sm-2">
            <button 
              className={cx('btn', {'btn-default': !this.state.showClientSecret, 'btn-danger': this.state.showClientSecret})} 
              onClick={(e) => {this.showClientSecretClick(e)}}>
              {this.state.showClientSecret ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        }      
        {this.state.newInfrastructure.authenication_provider === 'GitHub' &&
        <div className="form-group">
          <label htmlFor="github_organization" className="col-sm-2 control-label required-pf">GitHub Organization</label>
          <div className="col-sm-8 col-md-6">
            <input type="text" className="form-control" id="github_organization" required="" placeholder=""
              value={this.state.newInfrastructure.github_organization}
              onChange={(e) => { this.handleChange(e, 'github_organization') } } 
              disabled={!this.state.isNew}/>
          </div>
        </div>
        }
        <hr/>
        <div className="form-group">
          <div className="col-sm-2 control-label" id="compute_nodes_label">
            <label htmlFor="compute_nodes" className="tooltip-label">Compute Nodes</label>
            <span id="compute_nodes_tooltip" className="pficon pficon-info tooltip-info"></span>
            <Tooltip placement="right" targetSelector="#compute_nodes_label">
              Number of compute nodes available to the OCP cluster.
            </Tooltip>
          </div>
          <div className="col-xs-2">
            <input type="number" className="form-control" id="compute_nodes" placeholder=""
              min="0" max="10"
              value={this.state.newInfrastructure.compute_nodes}
              onChange={(e) => { this.handleChange(e, 'compute_nodes') } } 
              disabled={!this.state.isNew}/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-2 control-label" id="highly_available_label">
            <label  htmlFor="highly_available" className="tooltip-label">Highly Available</label>
            <span id="highly_available_tooltip" className="pficon pficon-info tooltip-info"></span>
            <Tooltip placement="right" targetSelector="#highly_available_label">
              Highly available OCP clusters have three master nodes as opposed to one.
            </Tooltip>
          </div>
          <div className="col-xs-2">
            <input type="checkbox" id="highly_available"
              checked={this.state.newInfrastructure.highly_available}
              onChange={(e) => { this.handleCheckChanged(e, 'highly_available') } } 
              disabled={!this.state.isNew}/>
          </div>
        </div>     

        {this.state.isNew &&
        <div className="form-group">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <p>Selecting <b>"Create"</b> will start the automations to deploy Red Hat OpenShift Container Platform on the selected provider platform. This platform will be then be available to your topology projects.</p>
          </div>
        </div>  
        }              

        {this.state.isNew &&
        <div className="form-group text-center">
          <button type="submit" className="btn btn-primary" disabled={!this.state.createEnabled} onClick={this.handleSubmit}>Create</button>
          &nbsp;&nbsp;
          <button type="submit" className="btn btn-default" onClick={this.props.handleCancel}>Cancel</button>
        </div>
        }
      </form>
    );
  }
}

export default CreateInfrastructureForm;