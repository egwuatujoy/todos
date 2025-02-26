import React, { useState } from "react";
import Nav from "./Nav";
import AddToDoBtn from "./AddToDoBtn";
import TodoLists from "./TodoLists";
import InputData from "./InputData";
import TodoTab from "./TodoTab";

// the data
// import todoLists from "./data/TodoData";
// the data

const App = () => {
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [selected, setSelected] = useState(false);
  const [openLists, setopenLists] = useState(true);

  const addnewItems = (newItem) => {
    setTodos((todos) => {
      const checkTitle = todos.find((todo) => todo.title === newItem.title);
      if (checkTitle) {
        return todos.map((todo) =>
          todo.title === newItem.title
            ? { ...todo, tasks: [...todo.tasks, ...newItem.tasks] }
            : todo
        );
      } else {
        return [...todos, newItem];
      }
    });
  };

  const isCompleted = (id) => {
    setTodos((todos) =>
      todos.map((to) => ({
        ...to,
        tasks: to.tasks.map((t) =>
          t.id === id ? { ...t, completed: !t.completed } : t
        ),
      }))
    );
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handletitleBtn = () => {
    if (title === "") {
      setSelected(true);
      alert("please input a title");
    } else {
      setSelected(false);
      setOpen(!open);
      setopenLists(false);
    }
  };

  const handleSelected = () => {
    setSelected(!selected);
  };

  const handledeletedItem = (id) => {
    setTodos((todos) =>
      todos.map((todo) => ({
        ...todo,
        tasks: todo.tasks.filter((to) => to.id !== id),
      }))
    );
  };

  console.log(todos);
  return (
    <div>
      <Nav />
      {openLists && <AddToDoBtn handleSelected={handleSelected} />}

      {selected && (
        <InputData
          handleTitle={handleTitle}
          title={title}
          handletitleBtn={handletitleBtn}
        />
      )}

      {open && <TodoTab title={title} addnewItems={addnewItems} />}

      {todos.length > 0 && (
        <TodoLists
          todos={todos}
          handledeletedItem={handledeletedItem}
          isCompleted={isCompleted}
        />
      )}
    </div>
  );
};

export default App;
