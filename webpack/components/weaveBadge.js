import React from 'react';
import Tag from './tag';

const WeaveBadge = (props) => {
  return (
    <Tag className={"weave-has-badge"}
         data-badge={props.content ? props.content : 'none'}
         tag={props.tag ? props.tag : 'span'}>
      {props.children}
    </Tag>
  )
}
export default WeaveBadge;
