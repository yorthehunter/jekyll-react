import React from 'react';
import WeavePopover from './weavePopover';
import Tag from './tag';

class WeaveHasPopover extends React.Component {
  componentWillMount(props){
    this.setState({popoverVisible: false});
  }

  render () {
    const defaultTag = 'span'

    return (
      <Tag className={"weave-opens-popover weave-has-popover" + (this.props.indicator ? " weave-has-popover-indication" : "")}
           tag={this.props.tag ? this.props.tag : defaultTag}
           isVisible={this.state.popoverVisible}
           onClick={this.toggleVisibility}>
          {
            React.Children.map(this.props.children, child => {
              if (child.type === WeavePopover)
                return React.cloneElement(child, {
                  popoverVisible: this.state.popoverVisible
                })
              else
                return child
            })
          }
      </Tag>
    )
  }

  placement = (placement) => {
    if (placement == 'left' || 'pull-left') {
      return "weave-popover--pull-left"
    } else if (placement == 'right' || 'pull-right') {
      return "weave-popover--pull-right"
    } else {
      return "weave-popover--centered"
    }
  }

  toggleVisibility = () => {
    this.setState({popoverVisible: !this.state.popoverVisible})
    console.log(this.state.popoverVisible)
  }
}

export default WeaveHasPopover;
