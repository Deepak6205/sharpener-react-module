import { useState } from "react";
import "./App.css";
import CourseList from "./CourseAdd/components/CourseList";
import CourseInput from "./CourseAdd/components/CourseInput";

function App() {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoal) => {
      const updatedGoal = [...prevGoal];
      updatedGoal.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoal;
    });
  };
  const deleteGoalHandler = (goalId) => {
    setCourseGoals((prevGoal) => {
      const updatedGoal = prevGoal.filter((goal) => goal.id !== goalId);
      return updatedGoal;
    });
  };

  let content = <p>No Goal found Please add your goal</p>;

  if (courseGoals.length > 0) {
    content = (
      <CourseList items={courseGoals} onDeleteItem={deleteGoalHandler} />
    );
  }

  return (
    <div className="app-content">
      <section>
        <CourseInput onAddInput={addGoalHandler} />
      </section>
      <section className="list-content">{content}</section>
    </div>
  );
}

export default App;
