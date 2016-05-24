import React, { Component, PropTypes } from 'react';

import request from 'browser-request';

// button that fire a get request and display progress (aka poor man ladda button)
export default class AsyncButton extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    labels: PropTypes.object,
    style: PropTypes.object,
    className: PropTypes.string,
    onError: PropTypes.func,
    onSuccess: PropTypes.func
  };
  static defaultProps = {
    title: '',
    className: '',
    style: {},
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
      status: AsyncButton.STATUS.default
    };
    this.onClick = ::this.onClick;
  }
  onClick() {
    if (this.state.status === AsyncButton.STATUS.pending) {
      return;
    }
    if (this.state.status === AsyncButton.STATUS.success || this.state.status === AsyncButton.STATUS.error) {
      this.setState({
        status: AsyncButton.STATUS.default
      });
      return;
    }
    this.setState({
      status: AsyncButton.STATUS.pending
    }, () => {
      // do req + success / failure
      request({
        uri: this.props.url,
        method: 'GET',
        json: true,
        timeout: 30000
      }, (err, res) => {
        if (err) {
          this.setState({
            status: AsyncButton.STATUS.error
          });
          if (this.props.onError) {
            this.props.onError(err);
          }
        } else {
          this.setState({
            status: AsyncButton.STATUS.success
          });
          if (this.props.onSuccess) {
            this.props.onSuccess(res);
          }
        }
      });
    });
  }
  render() {
    let style = {
      fontSize: 14,
      borderRadius: 5,
      background: '#eee',
      minWidth: 130,
      ...this.props.style
    };
    let className = this.props.className;
    let disabled = (this.state.status === AsyncButton.STATUS.pending);
    let label = this.props.labels[this.state.status];
    return (<button
            className={ className }
            title={ this.props.title }
            style={ style }
            disabled={ disabled }
            onClick={ this.onClick }
           >{ label }
           </button>);
  }
}
