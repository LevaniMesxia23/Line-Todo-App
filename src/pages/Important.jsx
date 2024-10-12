import TaskSearch from "../components/TaskSearch";
import { format } from "date-fns";
import { MyContext } from "../App";
import { useContext } from "react";

function Important() {
  const { tasks } = useContext(MyContext);
  const formattedDate = format(new Date(), "dd/MM/yy");
  const importantTasks = tasks.filter((task) => task.isImportance);

  return (
    <div>
      <div className="px-4">
        <TaskSearch />
        <div>
          {importantTasks.length > 0 ? (
            importantTasks.map((task, index) => (
              <div
                key={index}
                className="  rounded-[0.625rem] mb-6"
                style={{ backgroundColor: task.color }}
              >
                <div className="flex flex-col justify-between px-4 py-3 ">
                  <div className="bg-[#FDF8F2] max-w-[8rem] h-[30px] px-[10px] rounded-full flex justify-start gap-2 items-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M7.33333 12.7279C7.14389 12.7279 6.97889 12.6577 6.83833 12.5171C6.69778 12.3765 6.6275 12.2115 6.6275 12.0221C6.6275 11.8327 6.69778 11.668 6.83833 11.528C6.97889 11.3881 7.14389 11.3178 7.33333 11.3172C7.52278 11.3166 7.68778 11.3869 7.82833 11.528C7.96889 11.6692 8.03917 11.8342 8.03917 12.023C8.03917 12.2119 7.96889 12.3765 7.82833 12.5171C7.68778 12.6577 7.52278 12.7279 7.33333 12.7279ZM11 12.7279C10.8106 12.7279 10.6456 12.6577 10.505 12.5171C10.3644 12.3765 10.2942 12.2115 10.2942 12.0221C10.2942 11.8327 10.3644 11.668 10.505 11.528C10.6456 11.3881 10.8106 11.3178 11 11.3172C11.1894 11.3166 11.3544 11.3869 11.495 11.528C11.6356 11.6692 11.7058 11.8342 11.7058 12.023C11.7058 12.2119 11.6356 12.3765 11.495 12.5171C11.3544 12.6577 11.1894 12.7279 11 12.7279ZM14.6667 12.7279C14.4772 12.7279 14.3122 12.6577 14.1717 12.5171C14.0311 12.3765 13.9608 12.2115 13.9608 12.0221C13.9608 11.8327 14.0311 11.668 14.1717 11.528C14.3122 11.3881 14.4772 11.3178 14.6667 11.3172C14.8561 11.3166 15.0211 11.3869 15.1617 11.528C15.3022 11.6692 15.3725 11.8342 15.3725 12.023C15.3725 12.2119 15.3022 12.3765 15.1617 12.5171C15.0211 12.6577 14.8561 12.7279 14.6667 12.7279ZM5.148 19.25C4.72572 19.25 4.37342 19.1089 4.09108 18.8265C3.80875 18.5442 3.66728 18.1919 3.66667 17.7696V6.06377C3.66667 5.6421 3.80814 5.2901 4.09108 5.00777C4.37403 4.72543 4.72633 4.58396 5.148 4.58335H6.76958V2.53918H7.75683V4.58335H14.3147V2.53918H15.2313V4.58335H16.8529C17.2746 4.58335 17.6269 4.72482 17.9098 5.00777C18.1928 5.29071 18.3339 5.64302 18.3333 6.06468V17.7696C18.3333 18.1913 18.1922 18.5436 17.9098 18.8265C17.6275 19.1095 17.2749 19.2506 16.852 19.25H5.148ZM5.148 18.3334H16.8529C16.9935 18.3334 17.1227 18.2747 17.2407 18.1574C17.3586 18.04 17.4173 17.9105 17.4167 17.7687V9.73135H4.58333V17.7696C4.58333 17.9102 4.642 18.0394 4.75933 18.1574C4.87667 18.2753 5.00592 18.334 5.14708 18.3334M4.58333 8.81377H17.4167V6.06377C17.4167 5.92321 17.358 5.79396 17.2407 5.67602C17.1233 5.55807 16.9938 5.49941 16.852 5.50002H5.148C5.00683 5.50002 4.87728 5.55868 4.75933 5.67602C4.64139 5.79335 4.58272 5.92291 4.58333 6.06468V8.81377Z"
                        fill="#252931"
                      />
                      <path
                        d="M5.148 18.3334H16.8529C16.9935 18.3334 17.1227 18.2747 17.2407 18.1574C17.3586 18.04 17.4173 17.9105 17.4167 17.7687V9.73135H4.58333V17.7696C4.58333 17.9102 4.642 18.0394 4.75933 18.1574C4.87667 18.2753 5.00592 18.334 5.14708 18.3334M4.58333 8.81377H17.4167V6.06377C17.4167 5.92321 17.358 5.79396 17.2407 5.67602C17.1233 5.55807 16.9938 5.49941 16.852 5.50002H5.148C5.00683 5.50002 4.87728 5.55868 4.75933 5.67602C4.64139 5.79335 4.58272 5.92291 4.58333 6.06468V8.81377ZM4.58333 8.81377V5.50002M7.33333 12.7279C7.14389 12.7279 6.97889 12.6577 6.83833 12.5171C6.69778 12.3765 6.6275 12.2115 6.6275 12.0221C6.6275 11.8327 6.69778 11.668 6.83833 11.528C6.97889 11.3881 7.14389 11.3178 7.33333 11.3172C7.52278 11.3166 7.68778 11.3869 7.82833 11.528C7.96889 11.6692 8.03917 11.8342 8.03917 12.023C8.03917 12.2119 7.96889 12.3765 7.82833 12.5171C7.68778 12.6577 7.52278 12.7279 7.33333 12.7279ZM11 12.7279C10.8106 12.7279 10.6456 12.6577 10.505 12.5171C10.3644 12.3765 10.2942 12.2115 10.2942 12.0221C10.2942 11.8327 10.3644 11.668 10.505 11.528C10.6456 11.3881 10.8106 11.3178 11 11.3172C11.1894 11.3166 11.3544 11.3869 11.495 11.528C11.6356 11.6692 11.7058 11.8342 11.7058 12.023C11.7058 12.2119 11.6356 12.3765 11.495 12.5171C11.3544 12.6577 11.1894 12.7279 11 12.7279ZM14.6667 12.7279C14.4772 12.7279 14.3122 12.6577 14.1717 12.5171C14.0311 12.3765 13.9608 12.2115 13.9608 12.0221C13.9608 11.8327 14.0311 11.668 14.1717 11.528C14.3122 11.3881 14.4772 11.3178 14.6667 11.3172C14.8561 11.3166 15.0211 11.3869 15.1617 11.528C15.3022 11.6692 15.3725 11.8342 15.3725 12.023C15.3725 12.2119 15.3022 12.3765 15.1617 12.5171C15.0211 12.6577 14.8561 12.7279 14.6667 12.7279ZM5.148 19.25C4.72572 19.25 4.37342 19.1089 4.09108 18.8265C3.80875 18.5442 3.66728 18.1919 3.66667 17.7696V6.06377C3.66667 5.6421 3.80814 5.2901 4.09108 5.00777C4.37403 4.72543 4.72633 4.58396 5.148 4.58335H6.76958V2.53918H7.75683V4.58335H14.3147V2.53918H15.2313V4.58335H16.8529C17.2746 4.58335 17.6269 4.72482 17.9098 5.00777C18.1928 5.29071 18.3339 5.64302 18.3333 6.06468V17.7696C18.3333 18.1913 18.1922 18.5436 17.9098 18.8265C17.6275 19.1095 17.2749 19.2506 16.852 19.25H5.148Z"
                        stroke="#252931"
                        strokeWidth="0.4"
                      />
                    </svg>
                    <span className="text-[14px] font-normal text-textColor leading-6">
                      ({formattedDate})
                    </span>
                  </div>
                  <p className="pt-4 text-textColor break-words text-[14px] font-normal leading-6">
                    {task.text}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1 className=" text-center">No important tasks found.</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Important;
