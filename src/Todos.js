import React from "react";

const Todos = ({ todo, handledeletedItem }) => {
  return (
    <div className="todos">
      <div className="todo">
        <input type="checkbox" />

        <div className="main-lists">
          <h5>{todo.quantity}</h5>
          <h5>{todo.item}</h5>
        </div>

        <button onClick={() => handledeletedItem(todo.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Todos;
