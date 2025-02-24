import React from "react";
import Todos from "./Todos";

const TodoLists = ({ datas }) => {
  return (
    <div className="todo-lists">
      {datas.map((data) => (
        <Todos data={data} key={data.id} />
      ))}
    </div>
  );
};

export default TodoLists;
