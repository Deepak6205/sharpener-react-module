import React from 'react'
import Chart from '../chart/Chart';

const ExpenseChart = (props) => {
    
  return (
    <div>
        <Chart chartExpense={props.chartData}/>
    </div>
  )
}

export default ExpenseChart;