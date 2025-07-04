import React, { useState } from 'react'
import '../styles/CourseInput.css';
const CourseInput = (props) => {
  const [userInput,setUserInput] = useState("");

  const inputChangeHandler = (event)=>{
    setUserInput(event.target.value);
  }

  const handleFormSubmit = (event)=>{
    event.preventDefault();
    props.onAddInput(userInput)
  }
  return(
    
    <form onSubmit={handleFormSubmit} className='input-card'>
      <div className='input-box-container'>
        <label htmlFor='user'>Add Course</label>
      <input type='text' id='user'onChange={inputChangeHandler}/>
      <button type='submit'>Add Goal</button>
      </div>
      
    </form>
  )
}
export default CourseInput;