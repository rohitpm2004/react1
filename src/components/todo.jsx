import React, { useState } from 'react';

function Todo() {
  const [tasks, settasks] = useState([
    { id: 1, text: "Complete assignment 5", completed: false },
    { id: 2, text: "Review React components", completed: true }
  ]);
  const [newTask, setnewTask] = useState("");

  const handleChange = (event) => {
    setnewTask(event.target.value);
  };

  const handleAdd = () => {
    if (newTask.trim() !== "") {
      const newTaskObj = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      };
      settasks([...tasks, newTaskObj]);
      setnewTask("");
    }
  };

  const handleCheck = (id) => {
    settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    settasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-container">
      <h2>To do list</h2>
      <div className="input-group">
        <input 
          type="text" 
          value={newTask} 
          onChange={handleChange} 
          placeholder="Enter new task" 
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => (
          <li key={task.id} className="todo-item">
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleCheck(task.id)} 
            />
            <span className={task.completed ? 'check' : ''}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => handleDelete(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
