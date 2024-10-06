import Header from "../components/Header"
import TaskSearch from "../components/TaskSearch"
import { MyContext } from "../App"
import { useContext } from "react"
function Important() {
  const {clickImportance} = useContext(MyContext)
  return (
    <div>
      <Header />
      <div className="px-4">
      <TaskSearch />
      {clickImportance && <div></div>}
      </div>
    </div>
  )
}

export default Important