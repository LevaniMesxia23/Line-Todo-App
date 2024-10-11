import { Outlet } from "react-router-dom"

function UserLayout() {
  return (
    <div className=" w-100 h-100">
      <Outlet />
    </div>
  )
}

export default UserLayout