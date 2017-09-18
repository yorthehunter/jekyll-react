import React from 'react';

const placement = (placement) => {
  if (placement == ('below' || 'bottom')) {
    return " weave-has-tooltip--below"
  } else {
    return ""
  }
}

const WeaveTooltip = (props) => {
  return (
    <span className={"weave-has-tooltip" + placement(props.placement) + (props.indicator ? " weave-has-tooltip-indication" : "")}
          data-tooltip={props.content}>
      {props.children}
    </span>
  )
}

export default WeaveTooltip;
