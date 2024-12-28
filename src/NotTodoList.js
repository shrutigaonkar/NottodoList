import React from 'react';

const NotTodoList = ({ notTodos, updateNotTodo, deleteNotTodo }) => {
  return (
    <ul>
      {notTodos.map((notTodo) => (
        <li key={notTodo._id}>
          <input
            type="text"
            value={notTodo.task}
            onChange={(e) => updateNotTodo(notTodo._id, e.target.value)}
          />
          <button onClick={() => deleteNotTodo(notTodo._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NotTodoList;
