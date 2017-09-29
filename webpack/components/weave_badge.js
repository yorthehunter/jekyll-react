import React from 'react';
import Tag from './tag';

const WeaveBadge = (props) => {
  let defaultTag = 'span'

  if (props.content) {
    return <Tag className={"weave-has-badge"}
      data-badge={props.content}
      tag={props.tag ? props.tag : defaultTag}>
      {props.children}
    </Tag>
  } else {
    return <Tag className={"weave-has-badge"}
      tag={props.tag ? props.tag : defaultTag}>
      {props.children}
    </Tag>
  }
}

export default WeaveBadge;
