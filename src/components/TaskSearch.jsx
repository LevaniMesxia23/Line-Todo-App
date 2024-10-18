import { MyContext } from "../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "@tanstack/react-query";
import { apiAddTodo } from "../supabaseAPI/TodoApi"; 

function TaskSearch() {
  const { taskInput, setTaskInput, tasks, setTasks } = useContext(MyContext);
  const { t } = useTranslation();
  const userId = "userId"; 

  const mutation = useMutation({
    mutationFn: ({ userId, completed, important, description }) =>
      apiAddTodo(userId, completed, important, description),
    onSuccess: (newTask) => {
      console.log("Task added Successfully");

      const completeTask = {
        ...newTask, 
        complate: false, 
        important: false, 
      };

      setTaskInput(""); 
      setTasks((prevTasks) => [...prevTasks, completeTask]);
      console.log(tasks) 
    },
    onError: (error) => {
      console.error("Error adding task:", error.message);
    },
  });

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && taskInput.trim() !== "") {
      e.preventDefault();

      const completed = false; 
      const important = false; 

      mutation.mutate({
        userId,
        completed,
        important,
        description: taskInput,
      });
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-8 lg:ml-[25%]">
        <div className="flex items-center relative w-full max-w-lg mb-[2.5rem]">
          <svg
            className="absolute ml-7"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 6V18M18 12H6"
              stroke="#252931"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <input
            type="text"
            name="task"
            className="pl-[2.88rem] pr-3 py-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 sm:text-sm lg:text-base mx-4"
            placeholder={t("Add a task")}
            style={{ boxShadow: "0px 1px 8px 0px rgba(0, 0, 0, 0.25)" }}
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
}

export default TaskSearch;
