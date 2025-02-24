import React from "react";

const AddToDoBtn = ({ handleSelected }) => {
  return (
    <button className="btn" onClick={handleSelected}>
      <span className="plus-icon">+</span>
    </button>
  );
};

export default AddToDoBtn;
