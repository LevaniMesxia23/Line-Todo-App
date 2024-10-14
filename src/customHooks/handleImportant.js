import supabase from "../config/supabaseClient";

export const handleImportant = async (index, todos, setTasks, user) => {
  console.log(todos)
  const taskToUpdate = todos.find((todo) => todo.id === index);
  if (taskToUpdate) {
    const updatedTask = {
      ...taskToUpdate,
      important: !taskToUpdate.important,
    };
    console.log(taskToUpdate);

    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === index ? updatedTask : task))
    );

    const { data, error } = await supabase
      .from("todos")
      .update({ important: updatedTask.important })
      .eq("id", index)
      .eq("user_id", user.id);
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error.message);
    }
  }

};
