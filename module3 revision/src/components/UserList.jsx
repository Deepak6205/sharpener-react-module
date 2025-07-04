import React from "react";
import "../styles/UserList.css";
import Card from "./Card";
const UserList = (props) => {
  console.log(props.users);
  return (
    <Card>
      <ul className="list-item">
        {props.users.map((item) => {
          return (
            <li key={item.id}>
              {item.name} ({item.age} years old){" "}
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
