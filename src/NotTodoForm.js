import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const NotTodoForm = ({ addNotTodo }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      addNotTodo(task);
      setTask('');
    }
  };

  return (
    <div class="container"> 
    <h2>Add New List</h2>

    <form onSubmit={handleSubmit} align="Center"> 
      <label htmlFor="Task">Task</label>
     <br></br>
      <input
        type="text"
        value={task}
        name="task"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a not-to-do task"
      />
      <br></br>
      <Link to="/NotTodo/create" class="btn btn-primary">Add New List</Link>
      {/* <button type="submit" class="btn btn-primary">Add</button> */}
    </form>
    </div>
  );
};

export default NotTodoForm;
