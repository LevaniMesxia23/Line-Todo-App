import TasksSection from "../components/TasksSection.jsx";
import { useGetAllTodos } from "../Hooks/AddHook.js";
function Home() {
  const { data, isError, isLoading, error } = useGetAllTodos();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <TasksSection />
    </div>
  );
}

export default Home;
