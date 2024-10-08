import { MyContext } from "../App";
import { useContext, useEffect } from "react";
import { format } from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css"
import TaskSearch from "./TaskSearch";

function TasksSection() {
  const { tasks,  clickDot ,searchTodo, searchClick,deleteTask,handleAddImportance,handleClickDots } = useContext(MyContext);
  const formattedDate = format(new Date(), "dd/MM/yy");

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  },[tasks])

 
  const filteredTasks = tasks.filter(task => task.text.toLowerCase().includes(searchTodo));
  return (
    <div className=" px-4">
      <TaskSearch />
      {(searchClick ? filteredTasks : tasks ).map((task, index) => (
        <div key={index} className="  rounded-[0.625rem] mb-6">
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
            <div>
              <span className=" text-[#252931]">{task.text}</span>
            </div>

            <div className=" flex justify-end mt-[1.62rem] relative">
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
              {clickDot === index && <div data-aos="fade-right" className=" bg-white absolute py-2 px-[0.88rem] rounded-lg mt-7 min-w-[11.75rem] z-10">
                <ul>
                  <div onClick={() => handleAddImportance(index)} className={` flex justify-start py-[0.62rem] ${tasks[index].isImportance && 'bg-green-500'}  gap-3 w-full pl-2 rounded-lg cursor-pointer`} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M20.2262 8.46399C20.1627 8.26368 20.0406 8.08705 19.8755 7.95696C19.7105 7.82688 19.5102 7.74934 19.3006 7.73438L14.0181 7.30469L11.9831 2.37789C11.9029 2.18304 11.7667 2.01639 11.5916 1.89912C11.4166 1.78185 11.2106 1.71924 10.9999 1.71924C10.7892 1.71924 10.5833 1.78185 10.4083 1.89912C10.2332 2.01639 10.097 2.18304 10.0168 2.37789L7.98182 7.30469L2.69924 7.73438C2.48931 7.7522 2.28932 7.83161 2.12434 7.96264C1.95936 8.09368 1.83674 8.2705 1.77186 8.47094C1.70697 8.67139 1.7027 8.88653 1.7596 9.08938C1.81649 9.29224 1.93201 9.47378 2.09166 9.61125L6.11784 13.084L4.88721 18.2738C4.83567 18.4789 4.84662 18.6948 4.91865 18.8937C4.99068 19.0926 5.1205 19.2654 5.29146 19.39C5.46242 19.5146 5.66671 19.5853 5.87811 19.593C6.08952 19.6006 6.29838 19.5449 6.47791 19.433L10.9999 16.6521L15.522 19.433C15.6996 19.5453 15.907 19.6011 16.117 19.5933C16.327 19.5855 16.5297 19.5143 16.6985 19.3892C16.872 19.2664 17.0044 19.094 17.0783 18.8947C17.1522 18.6953 17.1642 18.4783 17.1127 18.272L15.8821 13.0797L19.9082 9.60695C20.0696 9.47019 20.1862 9.28812 20.2429 9.08433C20.2995 8.88055 20.2937 8.66443 20.2262 8.46399ZM19.4588 9.08789L15.2753 12.6973C15.2277 12.7384 15.1922 12.7917 15.1728 12.8516C15.1534 12.9115 15.1509 12.9755 15.1653 13.0367L16.4432 18.4327C16.462 18.5065 16.4579 18.5842 16.4315 18.6555C16.4051 18.7269 16.3576 18.7886 16.2954 18.8323C16.2362 18.8765 16.165 18.9017 16.0911 18.9044C16.0173 18.9072 15.9444 18.8874 15.8821 18.8478L11.1804 15.956C11.1262 15.9226 11.0637 15.9048 10.9999 15.9048C10.9362 15.9048 10.8737 15.9226 10.8195 15.956L6.11784 18.8478C6.05549 18.8874 5.98257 18.9072 5.90875 18.9044C5.83493 18.9017 5.76369 18.8765 5.70448 18.8323C5.64226 18.7886 5.59481 18.7269 5.56842 18.6555C5.54202 18.5842 5.53792 18.5065 5.55666 18.4327L6.83456 13.0367C6.84904 12.9755 6.84645 12.9115 6.82705 12.8516C6.80765 12.7917 6.7722 12.7384 6.72456 12.6973L2.54112 9.08789C2.48332 9.03917 2.44158 8.97414 2.42134 8.90131C2.4011 8.82848 2.40331 8.75124 2.42768 8.67969C2.45009 8.60883 2.4933 8.54634 2.55169 8.50037C2.61009 8.45439 2.68096 8.42704 2.7551 8.42188L8.24995 7.97414C8.31315 7.96912 8.37373 7.94671 8.425 7.9094C8.47626 7.87209 8.5162 7.82133 8.54041 7.76274L10.6562 2.64086C10.6839 2.57143 10.7318 2.51191 10.7937 2.46997C10.8556 2.42804 10.9286 2.40563 11.0034 2.40563C11.0781 2.40563 11.1512 2.42804 11.2131 2.46997C11.275 2.51191 11.3229 2.57143 11.3506 2.64086L13.4664 7.76274C13.49 7.82037 13.5289 7.87048 13.5789 7.90771C13.6288 7.94495 13.688 7.96791 13.7499 7.97414L19.2414 8.41672C19.3155 8.42188 19.3864 8.44923 19.4448 8.49521C19.5032 8.54119 19.5464 8.60367 19.5688 8.67453C19.5947 8.74644 19.598 8.82454 19.5784 8.8984C19.5587 8.97227 19.517 9.03837 19.4588 9.08789Z" fill="#252931" stroke="#252931" strokeWidth="0.4"/>
                    </svg>
                    <li>Importance</li>
                  </div>

                  <div className=" flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 rounded-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M11 20.1667C9.187 20.1667 7.41472 19.6291 5.90727 18.6218C4.39982 17.6146 3.22491 16.183 2.5311 14.508C1.8373 12.833 1.65577 10.9899 2.00947 9.21172C2.36317 7.43356 3.23621 5.80021 4.51819 4.51823C5.80017 3.23625 7.43351 2.36321 9.21167 2.00951C10.9898 1.65582 12.8329 1.83735 14.5079 2.53115C16.1829 3.22495 17.6146 4.39987 18.6218 5.90732C19.629 7.41477 20.1667 9.18705 20.1667 11C20.1667 13.4312 19.2009 15.7628 17.4818 17.4819C15.7627 19.2009 13.4312 20.1667 11 20.1667ZM11 3.66671C9.5496 3.66671 8.13178 4.0968 6.92582 4.9026C5.71986 5.7084 4.77993 6.85371 4.22488 8.1937C3.66984 9.53369 3.52462 11.0082 3.80757 12.4307C4.09053 13.8532 4.78896 15.1599 5.81455 16.1855C6.84013 17.2111 8.14681 17.9095 9.56934 18.1925C10.9919 18.4754 12.4664 18.3302 13.8063 17.7752C15.1463 17.2201 16.2916 16.2802 17.0974 15.0742C17.9032 13.8683 18.3333 12.4504 18.3333 11C18.3333 9.05512 17.5607 7.18986 16.1854 5.81459C14.8102 4.43933 12.9449 3.66671 11 3.66671Z" fill="#252931"/>
                    </svg>
                    <li>Complete</li>
                  </div>

                  <div className=" flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 rounded-lg cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M13.75 5.50001L16.5 8.25001M11.9167 18.3333H19.25M4.58334 14.6667L3.66667 18.3333L7.33334 17.4167L17.9538 6.79617C18.2975 6.45237 18.4906 5.98614 18.4906 5.50001C18.4906 5.01387 18.2975 4.54764 17.9538 4.20384L17.7962 4.04617C17.4524 3.70248 16.9861 3.5094 16.5 3.5094C16.0139 3.5094 15.5476 3.70248 15.2038 4.04617L4.58334 14.6667Z" stroke="#252931" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <li>Edit</li>
                  </div>

                  <div className=" flex justify-start py-[0.62rem] gap-3 w-full hover:bg-[#C7CAD0] pl-2 rounded-lg cursor-pointer" onClick={() => deleteTask(index)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path d="M9.03572 4.71427H12.9643C12.9643 4.19331 12.7573 3.69368 12.389 3.32531C12.0206 2.95693 11.521 2.74998 11 2.74998C10.479 2.74998 9.97942 2.95693 9.61104 3.32531C9.24267 3.69368 9.03572 4.19331 9.03572 4.71427ZM7.85715 4.71427C7.85715 3.88073 8.18827 3.08133 8.77767 2.49193C9.36707 1.90253 10.1665 1.57141 11 1.57141C11.8335 1.57141 12.6329 1.90253 13.2223 2.49193C13.8117 3.08133 14.1429 3.88073 14.1429 4.71427H19.0536C19.2099 4.71427 19.3598 4.77635 19.4703 4.88687C19.5808 4.99738 19.6429 5.14727 19.6429 5.30355C19.6429 5.45984 19.5808 5.60973 19.4703 5.72024C19.3598 5.83075 19.2099 5.89284 19.0536 5.89284H18.0243L17.0681 17.3666C16.9985 18.2013 16.6178 18.9794 16.0015 19.5465C15.3851 20.1137 14.5782 20.4285 13.7406 20.4286H8.25943C7.42186 20.4285 6.61489 20.1137 5.99854 19.5465C5.3822 18.9794 5.0015 18.2013 4.93193 17.3666L3.97572 5.89284H2.94643C2.79014 5.89284 2.64026 5.83075 2.52974 5.72024C2.41923 5.60973 2.35715 5.45984 2.35715 5.30355C2.35715 5.14727 2.41923 4.99738 2.52974 4.88687C2.64026 4.77635 2.79014 4.71427 2.94643 4.71427H7.85715ZM6.10658 17.2684C6.15151 17.8085 6.39778 18.312 6.79655 18.6791C7.19532 19.0461 7.71746 19.2499 8.25943 19.25H13.7406C14.2826 19.2499 14.8047 19.0461 15.2035 18.6791C15.6022 18.312 15.8485 17.8085 15.8934 17.2684L16.8426 5.89284H5.15822L6.10658 17.2684ZM9.23215 8.64284C9.38844 8.64284 9.53832 8.70493 9.64884 8.81544C9.75935 8.92595 9.82143 9.07584 9.82143 9.23213V15.9107C9.82143 16.067 9.75935 16.2169 9.64884 16.3274C9.53832 16.4379 9.38844 16.5 9.23215 16.5C9.07586 16.5 8.92597 16.4379 8.81546 16.3274C8.70495 16.2169 8.64286 16.067 8.64286 15.9107V9.23213C8.64286 9.07584 8.70495 8.92595 8.81546 8.81544C8.92597 8.70493 9.07586 8.64284 9.23215 8.64284ZM13.3571 9.23213C13.3571 9.07584 13.2951 8.92595 13.1846 8.81544C13.074 8.70493 12.9242 8.64284 12.7679 8.64284C12.6116 8.64284 12.4617 8.70493 12.3512 8.81544C12.2407 8.92595 12.1786 9.07584 12.1786 9.23213V15.9107C12.1786 16.067 12.2407 16.2169 12.3512 16.3274C12.4617 16.4379 12.6116 16.5 12.7679 16.5C12.9242 16.5 13.074 16.4379 13.1846 16.3274C13.2951 16.2169 13.3571 16.067 13.3571 15.9107V9.23213Z" fill="#252931" stroke="#252931" strokeWidth="0.4"/>
                    </svg>
                    <li>Delete</li>
                  </div>
                  
                </ul>
              </div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TasksSection;
