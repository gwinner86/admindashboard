import React from "react";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-3 bg-white">
      <div>
        <Image src="/img/logo.png" alt="Logo" height={80} width={140} />
      </div>
      <div>
        <Link href="/" className="cursor-pointer">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Topbar;
