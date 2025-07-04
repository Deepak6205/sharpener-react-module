import React from 'react'
import '../../styles/ExpenseFilter.css';
const ExpenseFilter = (props) => {
    const dropDownChangeHandler=(event)=>{
         props.onChangeFilter(event.target.value);
    }
  return (
    <div className='filter-content'>
        <div className='filter-content-data'>
            <label htmlFor="year-dropdown">Filter By Year</label>
            <select id='year-dropdown' value={props.selected} onChange={dropDownChangeHandler}>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
        </div>
    </div>
  )
}

export default ExpenseFilter