import React from 'react';
import {render} from 'react-dom';

class Tag extends React.Component {
  render() {
    return React.createElement(
      this.props.tag ? this.props.tag : 'div',
      this.props,
      this.props.children);
  }
}

export default Tag;
