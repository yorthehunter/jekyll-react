import '@stitch-fix/weave/scss/weave.scss'

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Hello from './components/Hello';

class App extends React.Component {
  render () {
    return <div>
      <Header />
      <Nav />
      <div>
        Content
      </div>
      <Footer />
    </div>
  }
}

render(
  <App/>, document.getElementById('root'));
