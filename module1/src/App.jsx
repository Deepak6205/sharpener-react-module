import { useState } from "react";
import Expenses from "../src/components/expenses/Expenses.jsx";
import "../src/styles/App.css";
import FormikForm from "./components/newExpense/FormikForm.jsx";
import NewExpense from "./components/newExpense/NewExpense.jsx";
import WithLoaderHoc from "./components/HOCs/WithLoaderHoc.jsx";
import UserList from "./components/HOCs/UserList.jsx";
import useFectch from "./components/CustomHook/useFectch.jsx";

function App() {
  const [expenses,setExpenses] = useState([
    { id: 1, title: "Insurance", date: new Date(2024, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2023, 4, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ]);

  const appExpenseHandler = (expense) => {
    setExpenses((prevExpenses)=>[expense,...prevExpenses])
  };
  // hoc part comment 2 lines below
  // const items = ['hello','hi','how r u'];
  // const EnhansedComponet = WithLoaderHoc(UserList,items);

  //          custom hook part
  // const {data,isLoading,error} = useFectch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  // if(isLoading) return <h2>Loading....</h2>
  // if(error) return <h3>Error: {error}</h3>


  return (
    <div className="appCard">
      {/* <FormikForm/> */}
      
      {/* main part */}
      <NewExpense onPassExpenseData={appExpenseHandler} />
      <h1>Let's get Started</h1>
      <Expenses expenses={expenses} />

       {/* hoc part below *
      <h1>Lets gets started</h1>
      <EnhansedComponet/>
      
          {/* Custom hook part below
      <h1>FetchData</h1>
      {data.map((res,index)=>{
        return(
          <p key={index}>{res.title}</p>
        )
      })} */}
    </div>
  );
}

export default App;
