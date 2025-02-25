import React from "react";

import Todos from "./Todos";
const TodoLists = ({ todos, handledeletedItem }) => {
  return (
    <div className="todo-lists">
      {todos.length > 0 && <h1>{todos[0].title}</h1>}
      {todos.map((todo) => (
        <Todos
          todo={todo}
          key={todo.id}
          handledeletedItem={handledeletedItem}
        />
      ))}
    </div>
  );
};

export default TodoLists;
