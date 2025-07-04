import React from 'react'
import '../styles/CourseList.css'
import CourseItem from './CourseItem'
const CourseList = (props) => {
  console.log(props.items)
  return (
    <ul className='ist-container'>
      {props.items.map((myGoal)=>{
        return(
        <CourseItem key={myGoal.id} id={myGoal.id} onDelete={props.onDeleteItem} className="list-item">
          {myGoal.text}
        </CourseItem>
        )
      })}
    </ul>
  );
}

export default CourseList