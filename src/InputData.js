const InputData = ({ handletitleBtn, title , handleTitle}) => {
  return (
    <div className="input-data">
      <label>PLEASE INPUT A TITLE</label>
      <input type="text" value={title} onChange={handleTitle} />
      <button onClick={handletitleBtn}> Done</button>
    </div>
  );
};

export default InputData;
