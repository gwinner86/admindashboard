import React from "react";
import Footer from "./Footer";
import Topbar from "./Topbar";
import SubTopbar from "./SubTopbar";
import Sidebar from "./Sidebar";

function DashboardLayout({ children, subtitle }) {
  const onSubmitEventHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="flex flex-col">
      <Topbar />
      <SubTopbar title={subtitle} />
      <div className="flex justify-between h-screen">
        <div className="hidden md:flex md:w-[250px] ">
          <Sidebar />
        </div>
        <div className="flex-1 bg-[#F7F8FC] overflow-auto">{children}</div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DashboardLayout;
