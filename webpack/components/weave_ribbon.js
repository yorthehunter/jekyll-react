import React from 'react'

const WeaveRibbon = (props) => {
  return <div className={"weave-ribbon weave-ribbon--overlay" + placement(props.placement) + size(props.size)}>
    {props.children}
  </div>
}

const placement = (placement) => {
  switch (placement) {
    case ("lower-left" || "bottom-left"):
      return " weave-ribbon--lower-left"
      break;
    case ("lower-right" || "bottom-right"):
      return " weave-ribbon--lower-right"
      break;
    case ("upper-left" || "top-left"):
      return " weave-ribbon--upper-left"
      break;
    case ("upper-right" || "top-right"):
      return " weave-ribbon--upper-right"
      break;
    default:
      return " weave-ribbon--lower-left"
      break;
  }
}

const size = (size) => {
  switch (size) {
    case ("small" || "sm"):
      return " weave-ribbon--sm"
      break;
    case ("medium" || "md"):
      return " weave-ribbon--md"
      break;
    case ("large" || "lg"):
      return " weave-ribbon--lg"
      break;
    default:
      return " weave-ribbon--lg"
      break;
  }
}

export default WeaveRibbon;
