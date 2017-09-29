import React from 'react';
import Tag from './tag';

const WeavePopover = (props) => {
  let defaultTag = 'div'

  return (
    <Tag className={"weave-popover" + placement(props.placement) + (props.popoverVisible ? ' is-visible' : '')}
         tag={props.tag ? props.tag : defaultTag}>
      {props.children}
    </Tag>
  )
}

const placement = (placement) => {
  switch (placement) {
    case ("left" || "pull-left"):
      return " weave-popover--pull-left"
      break;
    case ("right" || "pull-right"):
      return " weave-popover--pull-right"
      break;
    case ("center" || "centered"):
      return " weave-popover--centered"
      break;
    default:
      return " weave-popover--centered"
      break;
  }
}

export default WeavePopover;
