import '@stitch-fix/weave/scss/weave.scss'

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import WeaveButton from './components/weaveButton';
import WeaveTooltip from './components/WeaveTooltip';
import Hello from './components/hello';

class App extends React.Component {
  render () {
    return <div>
      <Header />
      <Nav />
      <div>
        <WeaveButton size="lg" type="primary">Thing!</WeaveButton>
        <p className="weave-p">
          <WeaveTooltip placement="below" tooltip="Hello friends!" indicator={true}>Tooltip Below!</WeaveTooltip>
        </p>
        <p className="weave-p">
          <WeaveTooltip tooltip="Hello friends!" indicator={true}>Tooltip Above!</WeaveTooltip>
        </p>
      </div>
      <Footer />
    </div>
  }
}

render(
  <App/>, document.getElementById('root'));
