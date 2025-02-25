import React from "react";

const Todos = ({ todo, handledeletedItem, isCompleted }) => {
  return (
    <div className="todos">
      <div className="todo">
        <input
          type="checkbox"
          className="check-box"
          onChange={() => isCompleted(todo.id)}
        />
        <div
          className="main-lists"
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          <h5>{todo.quantity}</h5>
          <h5>{todo.item}</h5>
        </div>
        <button onClick={() => handledeletedItem(todo.id)}>🗑️</button>
      </div>
    </div>
  );
};

export default Todos;
