import React from "react";
import Image from "next/image";
import Link from "next/link";

function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="hidden md:block w-1/2">
        <div className="flex items-center justify-center h-screen">
          <Image
            src="/img/login-image.jpg"
            alt=""
            width={900}
            height={1000}
            className="w-full h-screen object-cover bg-right-bottom"
          />
        </div>
      </div>
      {children}
    </div>
  );
}

export default AuthLayout;
