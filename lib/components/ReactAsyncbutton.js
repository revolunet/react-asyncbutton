import React, { Component, PropTypes } from 'react';

import request from 'browser-request';

// button that fire a get request and display progress (aka poor man ladda button)
export default class AsyncButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    labels: PropTypes.object
  };
  static defaultProps = {
    title: '',
    labels: {
      default: 'Click Me',
      pending: 'Updating',
      success: 'Done!',
      error: 'Error'
    }
  };
  static STATUS = {
    default: 'default',
    pending: 'pending',
    success: 'success',
    error: 'error'
  }
  constructor(...args) {
    super(...args);
    this.state = {
      status: ButtonAsync.STATUS.default
    };
    this.onClick = ::this.onClick;
  }
  onClick() {
    if (this.state.status === ButtonAsync.STATUS.pending) {
      return;
    }
    if (this.state.status === ButtonAsync.STATUS.success || this.state.status === ButtonAsync.STATUS.error) {
      this.setState({
        status: ButtonAsync.STATUS.default
      });
      return;
    }
    this.setState({
      status: ButtonAsync.STATUS.pending
    }, () => {
      // do req + success / failure
      request({
        uri: this.props.url,
        method: 'GET',
        json: true,
        timeout: 30000
      }, (err, res) => {
        if (err) {
          console.log('error', err);
          this.setState({
            status: ButtonAsync.STATUS.error
          });
        } else {
          console.log('success', res);
          this.setState({
            status: ButtonAsync.STATUS.success
          });
        }
      });
    });
  }
  render() {
    let buttonStyle = {
      fontSize: 14,
      borderRadius: 5,
      background: '#eee',
      minWidth: 130
    };
    let disabled = (this.state.status === ButtonAsync.STATUS.pending);
    let label = this.props.labels[this.state.status];
    return (<button
            title={ this.props.title }
            style={ buttonStyle }
            disabled={ disabled }
            onClick={ this.onClick }
           >{ label }
           </button>);
  }
}
