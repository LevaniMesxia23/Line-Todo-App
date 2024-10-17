import { supabase } from "../config/supabaseClient";

export const fetchTodos = async (userId) => {

  console.log(userId)
  const { data: todos, error } = await supabase
  .from("todos")
  .select("*")
  .eq("user_id", userId)
  
  return { todos, error };
};
export default fetchTodos;


export const apiAddTodo = async (userId, complate, important, description) => {
  const { data, error } = await supabase
    .from('todos')
    .insert([{
      user_id: userId,
      complate,
      important,
      description
    }]);
    if (error) {
    console.log({userId, complate, important, description})
    console.error("Error adding todo:", error.message);
  }

  return { data, error };
};

export const handleImportant = async (taskId, todos, setTasks) => {
  const task = todos.find((todo) => todo.id === taskId);

  if (!task) {
    throw new Error("Task not found");
  }

  const updatedImportance = !task.important;

  const { error } = await supabase
    .from("todos")
    .update({ important: updatedImportance })
    .eq("user_id", taskId);

  if (error) {
    throw new Error("Failed to update importance: " + error.message);
  }

  const updatedTasks = todos.map((todo) =>
    todo.id === taskId ? { ...todo, important: updatedImportance } : todo
  );

  setTasks(updatedTasks);
};
