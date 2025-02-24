import React, { useState } from "react";
import Nav from "./Nav";
import AddToDoBtn from "./AddToDoBtn";
import TodoLists from "./TodoLists";
import InputData from "./InputData";
import TodoTab from "./TodoTab";

// the data
import todoLists from "./data/TodoData";
// the data

const App = () => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState([]);
  const [selected, setSelected] = useState(false);

  const addnewItems = (newItem) => {
    setTodo((todo) => [...todo, newItem]);
  };
  console.log(todo);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handletitleBtn = () => {
    setSelected(!selected);
    setOpen(!open);
  };

  const handleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <Nav />
      <AddToDoBtn handleSelected={handleSelected} />

      {selected && (
        <InputData
          handleTitle={handleTitle}
          title={title}
          handletitleBtn={handletitleBtn}
        />
      )}

      {open && <TodoTab title={title} addnewItems={addnewItems} />}
    </div>
  );
};

export default App;
