import "../styles/CourseItem.css";

const CourseItem = (props) => {
  const handleDelete = () => {
    props.onDelete(props.id);
  };
  return (
    <div className="whole-container">
      <li onClick={handleDelete}>{props.children}</li>
    </div>
  );
};

export default CourseItem;
