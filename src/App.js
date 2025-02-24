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
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(false);
  const [openLists, setopenLists] = useState(false);

  const addnewItems = (newItem) => {
    setTodos((todos) => [...todos, newItem]);
    setopenLists(true);
  };

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
      {openLists && <TodoLists todos={todos} />}
    </div>
  );
};

export default App;
