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
  const [openLists, setopenLists] = useState(true);

  const addnewItems = (newItem) => {
    setTodos((todos) => {
      const existingTodo = todos.find((todo) => todo.title === newItem.title);

      if (existingTodo) {
        // Update the tasks array of the existing todo
        return todos.map((todo) =>
          todo.title === newItem.title
            ? { ...todo, tasks: [...todo.tasks, ...newItem.tasks] }
            : todo
        );
      } else {
        // If it doesn't exist, add a new todo
        return [...todos, newItem];
      }
    });
  }; // <-- Ensure this function is properly closed

  console.log(todos);

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
    setTodos((todos) => todos.filter((todo) => id !== todo.id));
  };

  const isCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        id === todo.id ? { ...todo, completed: !todo.completed } : todo
      )
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
