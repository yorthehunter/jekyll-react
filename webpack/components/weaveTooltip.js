import React from 'react';

const placement = (placement) => {
  if (placement == ('below' || 'bottom')) {
    return " weave-has-tooltip--below"
  } else {
    return ""
  }
}

const indicator = (indicator) => {
  indicator ? 'weave-has-tooltip-indication' : ''
}

const WeaveTooltip = (props) => {
  return (
    <span className={"weave-has-tooltip" + placement(props.placement) + (indicator ? " weave-has-tooltip-indication" : "")}
          data-tooltip={props.tooltip}>
      {props.children}
    </span>
  )
}
export default WeaveTooltip;
