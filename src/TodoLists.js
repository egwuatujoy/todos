import React from "react";

import Todos from "./Todos";
const TodoLists = ({ todos, title }) => {
  return (
    <div className="todo-lists">
      {todos.map((todo) => (
        <Todos todo={todo} key={todo.id}  />
      ))}
    </div>
  );
};

export default TodoLists;
