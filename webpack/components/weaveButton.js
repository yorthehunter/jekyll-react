import React from 'react';

const WeaveButton = (props) => {
  return (
    <button className={`weave-button weave-button--${props.type ? props.type : 'secondary'} weave-button--${props.size ? props.size : 'xs'}`}>
      {props.children}
    </button>
  )
}

export default WeaveButton;
