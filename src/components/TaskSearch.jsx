import { MyContext } from "../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

function TaskSearch() {
  const {t} = useTranslation()
  const { taskInput, setTaskInput, handleAddTask } = useContext(MyContext);
  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      e.preventDefault();
      handleAddTask();
    }
  };
  return (
    <div>
      <div className="flex justify-center mt-8 lg:ml-[25%]">
        <div className="flex items-center relative w-full max-w-lg mb-[2.5rem]">
          <svg
            className="absolute ml-5"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={handleAddTask}
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
            className="pl-[2.88rem] pr-3 py-2 w-full rounded-lg focus:outline-none focus:ring focus:ring-indigo-300 sm:text-sm lg:text-base mx-2"
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
