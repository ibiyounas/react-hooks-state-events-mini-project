import React from "react";

function Task({category, text, onRemove, task}) {

  function handleClick(event) {
    console.log(task)
    onRemove(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
