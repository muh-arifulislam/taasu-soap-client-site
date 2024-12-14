import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 lg:px-20 my-10">
        <div>
          <h1 className="text-3xl font-medium">My Profile</h1>
        </div>
        <div className="grid  grid-cols-1 sm:grid-cols-4 py-6 gap-6">
          <div className="hidden sm:block">
            <Sidebar />
          </div>
          <div className="col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
