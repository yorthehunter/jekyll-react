import React, {Component} from 'react';
import {render} from 'react-dom';

const WeaveButton = (props) => {
  return (
    <button className={`weave-button weave-button--${props.type} weave-button--${props.size}`}>
      {props.children}
    </button>
  )
}
export default WeaveButton;
