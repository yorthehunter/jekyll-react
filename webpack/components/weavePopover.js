import React from 'react';
import Tag from './tag';

const WeavePopover = (props) => {
  let defaultTag = 'div'

  return (
    <Tag className={"weave-popover" + (props.isVisible ? ' is-visible' : '')}
         tag={props.tag ? props.tag : defaultTag}>
      {props.children}
    </Tag>
  )
}

export default WeavePopover;
