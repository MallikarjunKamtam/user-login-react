import React from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";

function Adduser(props) {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <div>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age(Years):</label>
          <input id="age" type="number" />
          <button type="submit">Add User</button>
        </form>
      </div>
    </Card>
  );
}

export default Adduser;
