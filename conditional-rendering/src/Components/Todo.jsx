import React, { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.desc}</p>
    </div>
  );
};

export default Todo;
