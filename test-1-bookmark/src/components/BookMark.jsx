import React from "react";
import "./BookMark.css";
const BookMark = ({ addBookMark, setAddBookMark, onEdit }) => {
  const deleteHandler = (id) => {
    setAddBookMark(addBookMark.filter((item) => item.id !== id));
  };

  return (
    <ul className="main-cont">
      {addBookMark.map((item) => (
        <li key={item.id} className="child-cont">
          <p>{item.title}</p>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.link}
          </a>
          <button onClick={()=>onEdit(item.id)}>Edit</button>
          <button onClick={() => deleteHandler(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default BookMark;
