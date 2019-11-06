// IMPORTS
import React from "react";

// BUTTON
const Button = props => {
  // console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

// EXPORT
export default Button;
