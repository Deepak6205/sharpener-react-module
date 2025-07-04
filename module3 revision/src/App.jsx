
import { useState } from 'react'
import './App.css'
import AddUser from './components/AddUser'
import UserList from './components/UserList'
function App() {
const [userList,setUserList] = useState([]);
const addUserHandler = (uName,uAge)=>{
  setUserList((prevUser)=>{
   return [...prevUser,{
    name:uName,
    age:uAge,
    id:Math.random().toString(),
  }]})
}
  return (
    <div className='whole-item'>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={userList}/>
    </div>
  )
}

export default App
