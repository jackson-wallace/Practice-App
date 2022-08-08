import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    // if props.type is undefined then type === button
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
