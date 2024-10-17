import { MyContext } from "../App";
import { useContext, useEffect } from "react";
import { format } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css";
import TaskSearch from "./TaskSearch";
import { useTranslation } from "react-i18next";
import {
  DateIcon,
  CompletedIconWhite,
  ImportanceIcon,
  ImportantIconGreen,
  ImportanceIconWhite,
  CompletedIconGreen,
  CompletedIcon,
  EditIcon,
  DeleteIcon,
} from "../icons/icons";
// import { useGetAllTodos } from "../Hooks/AddHook";
import { useHandleImportant } from "../supabaseAPI/UseHandleImportant";
// import {useAddTodo} from "../Hooks/useAddTodo";

 const useTaskContext = () => {
  const { setClickDot } = useContext(MyContext);

  const handleClickDots = (index) => {
    setClickDot((prevIndex) => (prevIndex === index ? null : index));
  };
  return { handleClickDots };
};

function TasksSection() {
  // const {addTodo} = useAddTodo()
  // const { data: todosData, isError, isLoading, error } = useGetAllTodos();
  const { t } = useTranslation();
  const { handleClickDots } = useTaskContext();
  const {
    tasks,
    clickDot,
    searchTodo,
    searchClick,
    setClickDot,
    setTasks,
    isMedium,
  } = useContext(MyContext);
  const formattedDate = format(new Date(), "dd/MM/yy");

  const { toggleImportant } = useHandleImportant(tasks, setTasks);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task?.description.toLowerCase().includes(searchTodo)
  );

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setClickDot(false);
  };

  const handleAddImportance = (index) => {
    toggleImportant(index); 
    handleClickDots(false);
    // console.log(todosData)
  };

  const handleAddComplete = (index) => {
    let arr = tasks.map((item, i) => {
      if (index !== i) {
        return item;
      } else {
        return {
          ...item,
          complate: !item.complate,
        };
      }
    });
    handleClickDots(false);
    console.log(arr);
    setTasks(arr);
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }
  // if (isError) {
  //   return <p>{error.message}</p>;
  // }

  return (
    <>
      <TaskSearch />
      <div
        className={`px-4 grid lg:grid lg:grid-cols-3 lg:gap-2 ${
          isMedium && "grid-cols-2 gap-2"
        } lg:ml-[25%] md:grid md:grid-cols-2 md:gap-2`}
      >
        {(searchClick ? filteredTasks : tasks).map((task, index) => (
          <div
            key={index}
            className="rounded-[0.625rem] mb-6"
          >
            <div className="flex flex-col justify-between px-4 py-3">
              <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-[10px] rounded-full flex justify-start gap-2 items-center mb-4">
                <DateIcon />
                <span className="text-[14px] font-normal text-textColor leading-6">
                  ({formattedDate})
                </span>
              </div>
              <p className="pt-4 text-textColor break-words text-[14px] font-normal leading-6">
                {task?.description}
              </p>

              <div className="flex justify-end mt-[1.62rem] relative cursor-pointer">
                <div className="mr-2">
                  {task?.complate && <CompletedIconWhite />}
                </div>
                <div>{task?.important && <ImportanceIconWhite />}</div>
                <div>
                  <svg
                    onClick={() => handleClickDots(index)}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.2021 16.7979C12.8833 16.4791 12.4509 16.3 12 16.3C11.5491 16.3 11.1167 16.4791 10.7979 16.7979C10.4791 17.1167 10.3 17.5491 10.3 18C10.3 18.4509 10.4791 18.8833 10.7979 19.2021C11.1167 19.5209 11.5491 19.7 12 19.7C12.4509 19.7 12.8833 19.5209 13.2021 19.2021C13.5209 18.8833 13.7 18.4509 13.7 18C13.7 17.5491 13.5209 17.1167 13.2021 16.7979ZM13.2021 10.7979C12.8833 10.4791 12.4509 10.3 12 10.3C11.5491 10.3 11.1167 10.4791 10.7979 10.7979C10.4791 11.1167 10.3 11.5491 10.3 12C10.3 12.4509 10.4791 12.8833 10.7979 13.2021C11.1167 13.5209 11.5491 13.7 12 13.7C12.4509 13.7 12.8833 13.5209 13.2021 13.2021C13.5209 12.8833 13.7 12.4509 13.7 12C13.7 11.5491 13.5209 11.1167 13.2021 10.7979ZM13.2021 4.79792C12.8833 4.47911 12.4509 4.3 12 4.3C11.5491 4.3 11.1167 4.47911 10.7979 4.79792C10.4791 5.11673 10.3 5.54913 10.3 6C10.3 6.45087 10.4791 6.88327 10.7979 7.20208C11.1167 7.52089 11.5491 7.7 12 7.7C12.4509 7.7 12.8833 7.52089 13.2021 7.20208C13.5209 6.88327 13.7 6.45087 13.7 6C13.7 5.54913 13.5209 5.11673 13.2021 4.79792Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.4"
                    />
                  </svg>
                  {clickDot === index && (
                    <div
                      data-aos="fade-right"
                      className="bg-white absolute py-2 px-[0.88rem] rounded-lg mt-1 -ml-[148px] min-w-[11.75rem] z-10"
                    >
                      <ul className="flex flex-col gap-1">
                        <div
                          onClick={() => handleAddImportance(index)}
                          className={`flex justify-start py-[0.62rem] hover:bg-[#C7CAD0] border-b-[1px] ${
                            tasks[index]?.important && "text-[#8ac926]"
                          } gap-3 w-full pl-2 cursor-pointer`}
                        >
                          {!task?.important ? (
                            <ImportanceIcon />
                          ) : (
                            <ImportantIconGreen />
                          )}
                          <li>{t("Importance")}</li>
                        </div>

                        <div
                          onClick={() => {
                            handleAddComplete(index);
                          }}
                          className="flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 cursor-pointer border-b-[1px]"
                        >
                          {task?.complate ? (
                            <CompletedIconGreen />
                          ) : (
                            <CompletedIcon />
                          
                          )}

                          {task?.complate ? (
                            <li className="text-[#8ac926] line-through">
                              {t("Complete")}
                            </li>
                          ) : (
                            <li>{t("Complete")}</li>
                          )}
                        </div>

                        <div className=" flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2  cursor-pointer border-b-[1px]">
                          <EditIcon />
                          <li>{t("Edit")}</li>
                        </div>

                        <div
                          className=" flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 cursor-pointer "
                          onClick={() => deleteTask(index)}
                        >
                          <DeleteIcon />
                          <li className="hover:text-[red]">{t("Delete")}</li>
                        </div>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TasksSection;
