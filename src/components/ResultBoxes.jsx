import { MyContext } from "../App";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
function ResultBoxes() {
  const {t} = useTranslation()
  const {tasks} = useContext(MyContext)
  let done = tasks.filter(item => item.completed)
  let inProgress = tasks.filter(item => !item.completed)
  let importantTasks = tasks.filter((task) => task.isImportance);
  return (
    <>
    
    <div className=" mt-8 flex justify-center gap-4 px-4 flex-wrap lg:ml-[25%]">
      <div className="flex flex-col items-center justify-center w-[10.25rem] border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem]">
        <div className="flex justify-start w-full py-3">
          <h2 className="text-[#252931] text-[1rem] font-medium">{t("All Tasks")}</h2>
        </div>
        <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
        <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">{tasks.length}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[10.25rem] border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem]">
        <div className="flex justify-start w-full py-3">
          <h2 className="text-[#252931] text-[1rem] font-medium">{t("Important")}</h2>
        </div>
        <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
        <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">{importantTasks.length}</p>
      </div>
      
      <div className="flex flex-col items-center justify-center w-[10.25rem] border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem]">
        <div className="flex justify-start w-full py-3">
          <h2 className="text-[#252931] text-[1rem] font-medium">{t("In Progress")}</h2>
        </div>
        <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
        <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">{inProgress.length}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-[10.25rem] border-[#E7E8EA] border-[1px] rounded-lg px-[0.88rem]">
        <div className="flex justify-start w-full py-3">
          <h2 className="text-[#252931] text-[1rem] font-medium">{t("Done")}</h2>
        </div>
        <div className="w-full h-[1px] bg-[#D7D9DD]"></div>
        <p className="mt-6 mb-[2.69rem] text-[1.75rem] text-[#252931]">{done.length}</p>
      </div>
    </div>
    </>
  )
}

export default ResultBoxes