import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AsyncButton from '../../lib/index';

class App extends Component {
  constructor(...props) {
    super(...props);
    this.onSuccess = ::this.onSuccess;
  }
  onSuccess(res) {
    // for example purpose
    this.refs.log.innerHTML = 'Response 200 received';
  }
  render() {
    let url = 'https://api.github.com/users/octocat/repos';
    return (
      <div className='example'>
        <h1>react-asyncbutton</h1>
        <AsyncButton url={ url } onSuccess={ this.onSuccess }/>
        <div ref='log' style={ {marginTop: 20 } }></div>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
