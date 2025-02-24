import React, { useState } from "react";

const TodoTab = ({ title, addnewItems }) => {
  const [quantity, setQuantity] = useState(1);
  const [item, setItem] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title,
      item,
      quantity,
      completed: false,
    };
    addnewItems(newItem);
  };

  return (
    <form className="tab" onSubmit={handleSubmit}>
      <h1>{title}</h1>
      <div className="inputs">
        <input
          type="text"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num.id} value={num}>
              {num}
            </option>
          ))}
        </select>
        <button>Done</button>
      </div>
    </form>
  );
};

export default TodoTab;
