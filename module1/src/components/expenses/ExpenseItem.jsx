import React, { useState } from "react";
import '../../styles/ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../ui/Card";
const ExpenseItem = (props) => {
  
  const [title,setTitle] = useState(props.title);
  const handleClick=()=>{
    setTitle("title changed");
  }
  return (
    <Card className="container">
      <div className="location">
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense">
        <h1>{title}</h1>
        <div className="money">
          <p>${props.money}</p>
          
        </div>
        <button onClick={handleClick}>Click here</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
