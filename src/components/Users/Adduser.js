import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Adduser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

function Adduser(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      +enteredAge < 0 ||
      enteredAge.trim().length === 0 ||
      enteredUserName.trim().length === 0
    ) {
      setError({
        header: "Error",
        message: "Please enter valid details in the box",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredAge);

    console.log(enteredAge, enteredUserName);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModel
          header={error.header}
          message={error.message}
          onConfirm={errorHandler}
        >
          Okay
        </ErrorModel>
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName:</label>
          <input
            id="username"
            value={enteredUserName}
            onChange={userNameChangeHandler}
            type="text"
          />
          <label htmlFor="age">Age(Years):</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button onClick={addUserHandler} type="submit">
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
}

export default Adduser;
