import React from "react";

import TodoTab from "./TodoTab";
const TodoLists = ({ todos, title }) => {
  return (
    <div className="todo-lists">
      {todos.map((todo) => (
        <TodoTab todo={todo} key={todo.id} todotitle={title} />
      ))}
    </div>
  );
};

export default TodoLists;
