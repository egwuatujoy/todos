import React from "react";

const Todos = ({ todo, handledeletedItem }) => {
  return (
    <div className="todos">
      <div className="todo">
        <input type="checkbox" />
        <h5>{todo.item}</h5>
        <button onClick={() => handledeletedItem(todo.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Todos;
