import { useState } from "react";
import BookMark from "./components/BookMark";
import "./App.css";

function App() {
  const [addBookMark, setAddBookMark] = useState([]);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [editId, setEditId] = useState(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      const updated = addBookMark.map((item) =>
        item.id === editId ? { ...item, title, link } : item
      );
      setAddBookMark(updated);
      setEditId(null);
    } else {
      const newBookMark = {
        id: Date.now().toString() + Math.random().toString(),
        title,
        link,
      };
      setAddBookMark((prev) => [...prev, newBookMark]);
    }
    setTitle("");
    setLink("");
  };
  const editHandler = (id) => {
    const toEdit = addBookMark.find((item) => item.id === id);
    if (toEdit) {
      setTitle(toEdit.title);
      setLink(toEdit.link);
      setEditId(toEdit.id);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="user-title">
          <label htmlFor="u-titlt">Bookmark Title:</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            id="u-titlt"
          />
        </div>
        <div className="user-link">
          <label htmlFor="u-link">Bookmark Link</label>
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="URL"
            id="u-link"
          />
        </div>

        <button type="submit">
          {editId ? "Update Bookmark" : "Add Bookmark"}
        </button>
      </form>

      <BookMark
        addBookMark={addBookMark}
        setAddBookMark={setAddBookMark}
        onEdit={editHandler}
      />
    </>
  );
}

export default App;
