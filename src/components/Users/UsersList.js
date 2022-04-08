import React from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((x) => (
          <li key={x.id}>
            {x.name} is {x.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
