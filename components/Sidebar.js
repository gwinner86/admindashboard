import React, { useEffect, useState } from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import Image from "next/image";

import {
  FiUser,
  FiUsers,
  FiCalendar,
  FiUserCheck,
  FiGrid,
  FiServer,
} from "react-icons/fi";

function Sidebar() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("UserData"));
    setUserData(user);
  }, []);

  return (
    <div className="text-center bg-white overflow-y-auto overflow-x-hidden">
      <div className="pt-6 pb-2 flex items-center justify-center flex-col">
        <Image
          src="/img/avator.jpg"
          alt="Company avator"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h2 className="text-sm font-bold">{userData.name}</h2>
          <p className="text-gray-400 text-[12px]">{userData.email}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <SidebarMenuItem Icon={FiGrid} title="Analytics" url="/dashboard" />
        <SidebarMenuItem
          Icon={FiUserCheck}
          title="Contacts"
          url="/dashboard/contact"
        />
        <SidebarMenuItem
          Icon={FiUsers}
          title="Groups"
          url="/dashboard/groups"
        />
        <SidebarMenuItem
          Icon={FiCalendar}
          title="Scheduled messages"
          url="/dashboard/schedule-message"
        />
        <SidebarMenuItem
          Icon={FiServer}
          title="Sender names"
          url="/dashboard/sender-name"
        />
        <SidebarMenuItem
          Icon={FiUser}
          title="Accounts"
          url="/dashboard/account"
        />
      </div>
    </div>
  );
}

export default Sidebar;
