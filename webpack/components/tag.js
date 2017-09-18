import React from 'react';
import {render} from 'react-dom';

class Tag extends React.Component {
  render() {
    var tag = this.props.tag ? this.props.tag : 'div'
    return React.createElement(tag, this.props, this.props.children);
  }
}

export default Tag;
