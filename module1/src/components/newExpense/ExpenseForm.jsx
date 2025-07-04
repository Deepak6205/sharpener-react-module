import React, { useState } from "react";
import "../../styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [toggle, setToggle] = useState(false);
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const amountChangeHandler = (event) => setAmount(event.target.value);
  const dateChangeHandler = (event) => setDate(event.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: title,
      price: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
    setToggle(false);
  };
  const handleTogle = () => {
    setToggle((prevState) => !prevState);
  };

  return (
    <form className="form-data" onSubmit={submitHandler}>
      {toggle ? (
        <>
          <div id="input">
            <label htmlFor="userInput">Title</label>
            <input
              type="text"
              id="userInput"
              value={title}
              onChange={titleChangeHandler}
            />
          </div>
          <div id="amount">
            <label htmlFor="userAmount">Amount</label>
            <input
              type="number"
              id="userAmount"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div id="date">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={dateChangeHandler}
            />
          </div>
          <div className="add-button">
            <button type="button" onClick={handleTogle}>
              Cancel
            </button>
            <button type="submit">Add Expenses</button>
          </div>
        </>
      ) : (
        <div className="cancel-btn" onClick={handleTogle}>
          <button type="button">{toggle ? "Cancel" : "Add Expenses"}</button>
        </div>
      )}
    </form>
  );
};

export default ExpenseForm;
