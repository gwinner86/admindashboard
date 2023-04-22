import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function SidebarMenuItem({ title, url, Icon }) {
  const router = useRouter();

  return (
    <div className="hover:bg-gray-100 -mx-6  pl-6 pr-9">
      <div className="flex gap-x-3 py-4 items-center">
        <div>
          {Icon && (
            <Icon
              className={
                router.pathname === url
                  ? "w-5 h-5 text-secondary-color"
                  : "w-5 h-5"
              }
            />
          )}
        </div>
        <div className={router.pathname === url ? "text-secondary-color" : ""}>
          <Link className="text-left" href={url}>
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SidebarMenuItem;
