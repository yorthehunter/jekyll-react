import '@stitch-fix/weave/scss/weave.scss'

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import WeaveButton from './components/weaveButton';
import WeaveTooltip from './components/weaveTooltip';
import WeaveBadge from './components/weaveBadge';
import Hello from './components/hello';

class App extends React.Component {
  render () {
    return <div>
      <Header />
      <Nav />
      <div>
        <WeaveBadge content="!">Hello</WeaveBadge>

        <WeaveButton>Button</WeaveButton>
        <WeaveButton size="sm" type="primary">Button</WeaveButton>
        <WeaveButton size="md" type="primary">Button</WeaveButton>
        <WeaveButton size="lg" type="primary">Button</WeaveButton>
        <WeaveButton size="sm" type="secondary">Button</WeaveButton>
        <WeaveButton size="md" type="secondary">Button</WeaveButton>
        <WeaveButton size="lg" type="secondary">Button</WeaveButton>
        <WeaveButton size="sm" type="cta">Button</WeaveButton>
        <WeaveButton size="md" type="cta">Button</WeaveButton>
        <WeaveButton size="lg" type="cta">Button</WeaveButton>
        <WeaveButton size="sm" type="flat">Button</WeaveButton>
        <WeaveButton size="md" type="flat">Button</WeaveButton>
        <WeaveButton size="lg" type="flat">Button</WeaveButton>

        <p className="weave-p">
          <WeaveTooltip placement="below" content="Hello friends!" indicator={true}>Tooltip Below!</WeaveTooltip>
        </p>
        <p className="weave-p">
          <WeaveTooltip content="Hello friends!" indicator={true}>Tooltip Above!</WeaveTooltip>
        </p>
      </div>
      <Footer />
    </div>
  }
}

render(
  <App/>, document.getElementById('root'));
