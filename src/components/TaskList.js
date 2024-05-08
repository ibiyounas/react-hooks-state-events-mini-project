import React from "react";
import Task from "./Task";
function TaskList({tasks, onRemove, selectedCategory}) {

  const taskToDisplay = tasks?.filter((task)=> {
    if(selectedCategory ==="All"){
      return tasks
    }

    return task.category.toLowerCase().includes(selectedCategory.toLowerCase())
  })
const task = taskToDisplay?.map((task)=> {
  return <Task key={task.text} category = {task.category} text={task.text} onRemove={onRemove} task={task}/>
})

  return (

    <div className="tasks">
      {task}
    </div>
  );
}

export default TaskList;
