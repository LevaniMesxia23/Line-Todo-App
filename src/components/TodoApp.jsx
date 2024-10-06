import { useState, useEffect } from 'react';

const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, isImportant: false, isCompleted: false }]);
  };

  const toggleImportance = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => 
        task.id === id ? { ...task, isImportant: !task.isImportant } : task
      )
    );
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => 
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <input type="text" placeholder="Add a new task" onKeyDown={(e) => {
        if (e.key === 'Enter') {
          addTask(e.target.value);
          e.target.value = ''; 
        }
      }} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}>
            <span style={{ fontWeight: task.isImportant ? 'bold' : 'normal' }}>{task.text}</span>
            <button onClick={() => toggleImportance(task.id)}>Importance</button>
            <button onClick={() => completeTask(task.id)}>Complete</button>
            <button onClick={() => {
              const newText = prompt('Edit task:', task.text);
              if (newText) editTask(task.id, newText);
            }}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
