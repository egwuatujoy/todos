import React, { useState } from "react";
import Nav from "./Nav";
import AddToDoBtn from "./AddToDoBtn";
import TodoLists from "./TodoLists";

// the data
import todoLists from "./data/TodoData";
import InputData from "./InputData";
console.log(todoLists);
// the data

const App = () => {
  const [open, setOpen] = useState(false);
  const [data, setDatas] = useState(todoLists);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Nav />
      <AddToDoBtn handleOpen={handleOpen} />
      <InputData />
      {open && <TodoLists datas={data} />}
    </div>
  );
};

export default App;
