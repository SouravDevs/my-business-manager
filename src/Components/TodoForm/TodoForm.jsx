import React, { useState } from "react";
import "./TodoForm.css";

function TodoForm({ setDatabase }) {
  const [value, setValue] = useState({
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(value.text);

    setDatabase((pre) => [...pre, { ...value.text, id: crypto.randomUUID() }]);

    setValue({
      text: "",
    });
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value.text}
          onChange={(e) =>
            setValue((pre) => ({ ...pre, text: e.target.value }))
          }
          placeholder="Type here..."
        />
        <button className="add-btn">+</button>
      </form>
    </div>
  );
}

export default TodoForm;
