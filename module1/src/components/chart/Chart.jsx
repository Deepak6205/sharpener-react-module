import React from "react";
import ChartBar from "./ChartBar";
import '../../styles/Chart.css';
const Chart = (props) => {
  const expenseOnly = props.chartExpense.map((monthExpenseData) => {
    return monthExpenseData.price;
  });
  const maxValue = Math.max(...expenseOnly);
  const chartData = [
    { expeneMonth: "Jan", expenseValue: 0 },
    { expeneMonth: "Feb", expenseValue: 0 },
    { expeneMonth: "Mar", expenseValue: 0 },
    { expeneMonth: "Apr", expenseValue: 0 },
    { expeneMonth: "May", expenseValue: 0 },
    { expeneMonth: "Jun", expenseValue: 0 },
    { expeneMonth: "Jul", expenseValue: 0 },
    { expeneMonth: "Aug", expenseValue: 0 },
    { expeneMonth: "Sep", expenseValue: 0 },
    { expeneMonth: "Oct", expenseValue: 0 },
    { expeneMonth: "Nov", expenseValue: 0 },
    { expeneMonth: "Dec", expenseValue: 0 },
  ];
  for (let expense of props.chartExpense) {
    chartData[expense.date.getMonth()].expenseValue += expense.price;
  }
  return (
    <div className='chart'>
      {chartData.map((monthData) => {
        return (
          <ChartBar
            key={monthData.expeneMonth}
            label={monthData.expeneMonth}
            value={monthData.expenseValue}
            maxValue={maxValue}
          />
        );
      })}
    </div>
  );
};

export default Chart;
