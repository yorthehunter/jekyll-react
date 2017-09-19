import React from 'react';
import Tag from './tag';

class WeaveHasPopover extends React.Component {
  componentWillMount(props){
    this.setState({popoverVisible: false});
  }

  const defaultTag = 'span'

  toggleVisibility = () => {
    this.setState({popoverVisible: !this.state.popoverVisible})
  }

  render () {
    return (
      <Tag className={"weave-opens-popover" + (props.indicator ? " weave-has-popover-indication" : "")}
           tag={props.tag ? props.tag : defaultTag}
           isVisible={this.state.popoverVisible}
           onClick={this.toggleVisibility}>
        {props.children}
      </Tag>
    )
  }
}

export default WeaveHasPopover;
