import React, { useState } from "react";

const InputData = () => {
  const [val, setVal] = useState(" ");
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
    </div>
  );
};

export default InputData;
