import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ReactAsyncbutton from '../../lib/index';

class App extends Component {

  click() {
    alert('Roger that !');
  }

  render() {
    return (
      <div className='example'>
        <h1>react-asyncbutton</h1>
        <ReactAsyncbutton click={ this.click } name='Click me'/>
      </div>
    );
  }

}

ReactDOM.render(<App/>, document.getElementById('container'));
