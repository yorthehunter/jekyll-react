import React from 'react';

const WeaveTooltip = (props) => {
  return (
    <span className={"weave-has-tooltip" + placement(props.placement) + (props.indicator ? " weave-has-tooltip-indication" : "")}
          data-tooltip={props.content}>
      {props.children}
    </span>
  )
}

const placement = (placement) => {
  if (placement == ('below' || 'bottom')) {
    return " weave-has-tooltip--below"
  } else {
    return ""
  }
}

export default WeaveTooltip;
