import React from "react";

const Todos = ({ todo, handledeletedItem, isCompleted }) => {
  return (
    <>
      {todo.tasks.map((to) => (
        <div className="main-lists">
          <input
            type="checkbox"
            className="check-box"
            onChange={() => isCompleted(to.id)}
          />

          <div
            style={{
              textDecoration: to.completed ? "line-through" : "none",
            }}
            className="lists"
          >
            <h5>{to.quantity}</h5>
            <h5>{to.description}</h5>
          </div>

          <button onClick={() => handledeletedItem(to.id)}>🗑️</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
