import React from 'react'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const expenseDataHandler=(enteredExpenseData)=>{
      const newExpenseData = {
        ...enteredExpenseData,
        id:Math.random().toString(),
      }
        props.onPassExpenseData(newExpenseData);
    };
  return (
    
    <div>
        <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>
  )
}

export default NewExpense