import React, { useState } from "react";

const Todo = ({ todo }) => {
  const [todos, setTodos] = useState([
    {
      title: "First",
      desc: "I am First",
    },
    {
      title: "Second",
      desc: "I am Second",
    },
    {
      title: "Third",
      desc: "I am Third",
    },
  ]);
  return (
    <div className="todo">
      {todo.title}
      <div className="todo">{todo.desc}</div>
    </div>
  );
};

export default Todo;
