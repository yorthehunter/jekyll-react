import '@stitch-fix/weave/scss/weave.scss';

console.log("Hello, world!")

import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './components/header';
import Nav from './components/nav';
import Footer from './components/footer';
import WeaveButton from './components/weave_button';
import WeaveTooltip from './components/weave_tooltip';
import WeaveBadge from './components/weave_badge';
import WeaveHasPopover from './components/weave_has_popover';
import WeavePopover from './components/weave_popover';
import WeaveRibbon from './components/weave_ribbon';

class App extends React.Component {
  render () {
    return <div className="weave-container">
      <Header />
      <Nav />

      <div className="u-stack--xl">
        <WeavePopover popoverVisible={true}>Hello</WeavePopover>
      </div>

      <div className="u-stack--xl">
        <WeaveBadge content="!">Hello</WeaveBadge>
      </div>

      <div className="u-stack--xl">
        <WeaveButton>Button</WeaveButton>
        <WeaveButton size="sm" type="primary">Button</WeaveButton>
        <WeaveButton size="md" type="primary">Button</WeaveButton>
        <WeaveButton size="lg" type="primary">Button</WeaveButton>
      </div>
      <div className="u-stack--xl">
        <WeaveButton size="sm" type="secondary">Button</WeaveButton>
        <WeaveButton size="md" type="secondary">Button</WeaveButton>
        <WeaveButton size="lg" type="secondary">Button</WeaveButton>
      </div>
      <div className="u-stack--xl">
        <WeaveButton size="sm" type="cta">Button</WeaveButton>
        <WeaveButton size="md" type="cta">Button</WeaveButton>
        <WeaveButton size="lg" type="cta">Button</WeaveButton>
      </div>
      <div className="u-stack--xl">
        <WeaveButton size="sm" type="flat">Button</WeaveButton>
        <WeaveButton size="md" type="flat">Button</WeaveButton>
        <WeaveButton size="lg" type="flat">Button</WeaveButton>
      </div>

      <div className="u-stack--xl" style={{display: "flex", justifyContent: "space-between"}}>
        <WeaveHasPopover>
          Click Here!
          <WeavePopover placement="left">Hello</WeavePopover>
        </WeaveHasPopover>

        <WeaveHasPopover>
          Click Here!
          <WeavePopover placement="center">Hello</WeavePopover>
        </WeaveHasPopover>

        <WeaveHasPopover>
          Click Here!
          <WeavePopover placement="right">Hello</WeavePopover>
        </WeaveHasPopover>
      </div>

      <div className="u-stack--xl">
        <div style={{position: "relative", display: "inline-block"}}>
          <WeaveRibbon>Ribbon!</WeaveRibbon>
          <WeaveRibbon size="md" placement="upper-right">Ribbon!</WeaveRibbon>
          <WeaveRibbon size="sm" placement="lower-right">Ribbon!</WeaveRibbon>
          <WeaveRibbon size="small" placement="upper-left">Ribbon!</WeaveRibbon>
          <img src="http://via.placeholder.com/350x150" />
        </div>
      </div>

      <div className="u-stack--xl">
        <WeaveTooltip placement="below" content="Hello friends!" indicator={true}>Tooltip Below!</WeaveTooltip>
      </div>

      <div className="u-stack--xl">
        <WeaveTooltip content="Hello friends!" indicator={true}>Tooltip Above!</WeaveTooltip>
      </div>

      <Footer />
    </div>
  }
}

render(
  <App/>, document.getElementById('root'));
