import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <div
        className={classes.button}
        typeof={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Button;
