import '@stitch-fix/weave/scss/weave.scss'

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import WeaveButton from './components/weaveButton';
import Hello from './components/hello';

class App extends React.Component {
  render () {
    return <div>
      <Header />
      <Nav />
      <div>
        <WeaveButton size="lg" type="primary">Thing!</WeaveButton>
      </div>
      <Footer />
    </div>
  }
}

render(
  <App/>, document.getElementById('root'));
