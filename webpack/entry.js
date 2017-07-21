import '@stitch-fix/weave/scss/weave.scss'
// import '../node_modules/@stitch-fix/weave/scss/weave.scss'

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (<Hello/>)
  }
}

render(
  <App/>, document.getElementById('root'));
