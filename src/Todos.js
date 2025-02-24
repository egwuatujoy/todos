import React from "react";

const Todos = ({ todo }) => {
  return (
    <div className="todo">
      <input type="checkbox" />
      <h5>{todo.item}</h5>
    </div>
  );
};

export default Todos;
