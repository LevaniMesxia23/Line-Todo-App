
const getLightColor = () => {
  const r = Math.floor(Math.random() * 156) + 100;
  const g = Math.floor(Math.random() * 156) + 100;
  const b = Math.floor(Math.random() * 156) + 100;
  return `rgb(${r}, ${g}, ${b})`;
};

const handleAddTask = (taskInput, tasks, setTasks, setTaskInput) => {
  if (taskInput.trim()) {
    const newTask = {
      text: taskInput,
      completed: false,
      isImportance: false,
      color: getLightColor(),
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  }
};

export { getLightColor, handleAddTask };
