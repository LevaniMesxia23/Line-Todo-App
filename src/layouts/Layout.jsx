import { Outlet } from "react-router-dom";
import Header from "../components/Header";
function Layout() {
  return (
    <>
      <Header />
      <div className=" w-100 h-100">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
