import React, { useState } from "react";
import "../styles/AddUser.css";
import Card from "./Card";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();
  const inputChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "invalid inputs",
        message: "userName is Empty write your name",
      });
      return;
    } else if (+userAge < 1) {
      setError({
        title: "Invalid inputs",
        message: "user must have age Please Enter a valid age (age > 0).",
      });
      return;
    }
    props.onAddUser(userName, userAge);
    setUserName("");
    setUserAge("");
  };
  const errorHandler = ()=>{
    setError(null);
  }
  return (
    <div>
    {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
    <Card>
      <form className="container" onSubmit={addUserHandler}>
        <div className="input-field">
          <label htmlFor="user-input">User Name:</label>
          <input
            type="text"
            name=""
            id="user-input"
            value={userName}
            onChange={inputChangeHandler}
          />
        </div>
        <div className="age-field">
          <label htmlFor="user-age">Age:</label>
          <input
            type="text"
            name=""
            onChange={ageChangeHandler}
            id="user-age"
            value={userAge}
          />
        </div>

        <Button type="submit">AddUser</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
