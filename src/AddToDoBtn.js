import React from "react";

const AddToDoBtn = ({ handleOpen }) => {
  return (
    <button className="btn" onClick={handleOpen}>
      <span className="plus-icon">+</span>
    </button>
  );
};

export default AddToDoBtn;
