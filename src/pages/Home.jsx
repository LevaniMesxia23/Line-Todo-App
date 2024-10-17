// import { useUser } from "@clerk/clerk-react";
import TasksSection from "../components/TasksSection.jsx";
// import { useGetAllTodos } from "../Hooks/AddHook.js";

function Home( ) {
  // const {user} = useUser()
  // const userId = user?.id
  // const { isError, isLoading, error, data } = useGetAllTodos(userId);
  // console.log(data);
  
  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  return (
    <div>
      {/* todos={data?.todos} */}
      <TasksSection  />
    </div>
  );
}

export default Home;
