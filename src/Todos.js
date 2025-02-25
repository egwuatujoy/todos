import React from "react";

const Todos = ({ todo, handledeletedItem, isCompleted }) => {
  return (
    <div className="todos">
      {todo.tasks.map((to) => (
        <div
          className="main-lists"
          style={{
            textDecoration: to.completed ? "line-through" : "none",
          }}
        >
          <input
            type="checkbox"
            className="check-box"
            onChange={() => isCompleted(todo.id)}
          />
          <h5>{to.quantity}</h5>
          <h5>{to.description}</h5>
        </div>
      ))}

      <button onClick={() => handledeletedItem(todo.id)}>🗑️</button>
    </div>
  );
};

export default Todos;
