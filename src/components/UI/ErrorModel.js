import React from "react";
import classes from "./ErrorModel.module.css";
import Button from "./Button";

function ErrorModel(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm}>
        <div className={classes.body}>
          <header>
            <h2>{props.header}</h2>
          </header>
          <p>{props.message}</p>
          <Button className={classes.button} onClick={props.onConfirm}>
            {props.children}
          </Button>
        </div>
      </div>
    </>
  );
}

export default ErrorModel;
