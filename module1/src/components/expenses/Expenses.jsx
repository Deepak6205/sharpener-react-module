import React, { useState } from "react";
import ExpenseItem from './ExpenseItem.jsx';
import "../../styles/Expenses.css";
import Card from "../ui/Card.jsx";
import ExpenseFilter from "./ExpenseFilter.jsx";
import ExpenseChart from "./ExpenseChart.jsx";
const Expenses = (props) => {
  const [filteredYear,setFilteredYear] = useState("2023")
  const changeFilterHandler=(selectedYear)=>{
    setFilteredYear(selectedYear);
  }
  const filteredExpense = props.expenses.filter((expense)=>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  let expenseContent = <p id="one-expense">No Expenses Found</p>;

  if(filteredExpense.length === 1){
    expenseContent = (
      <>
      <ExpenseItem
            key={filteredExpense[0].id}
            date={filteredExpense[0].date}
            title={filteredExpense[0].title}
            money={filteredExpense[0].price}
          />
      <p id="one-expense">Only one expense found please add more</p>
      </>
    )
  }

  if(filteredExpense.length > 1){
    expenseContent = (filteredExpense.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            date={item.date}
            title={item.title}
            money={item.price}
          />
        );
      }))
  }
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={changeFilterHandler}/>
      <ExpenseChart chartData={filteredExpense}/>
      {expenseContent}
    </Card>
  );
};

export default Expenses;
