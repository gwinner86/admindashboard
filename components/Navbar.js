import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiMenuAltRight } from "react-icons/bi";
import { useRouter } from "next/router";

function Navbar() {
  const [showOverlay, setShowOverlay] = useState(false);
  const router = useRouter();
  console.log(router.pathname);

  return (
    <div className="px-10  lg:px-14 xl:px-48 flex justify-between  items-center bg-white py-4 sticky top-0 z-50">
      <div>
        <Link href="/">
          <Image src="/img/logo.png" alt="Logo" height={80} width={140} />
        </Link>
      </div>
      <div className="hidden lg:flex gap-x-4">
        <div>
          <Link
            href="/developer"
            // className="text-[16px] uppercase text-primary-color hover:text-secondary-color"
            className={
              router.pathname == "/developer"
                ? " text-lighter-secondary-color  border-b-4 border-secondary-color uppercase py-4"
                : "text-[16px] uppercase text-primary-color  hover:text-secondary-color"
            }
          >
            Developers
          </Link>
        </div>
        <div>
          <Link
            href="/support"
            // className="text-[16px] uppercase text-primary-color  hover:text-secondary-color"
            className={
              router.pathname == "/support"
                ? " text-lighter-secondary-color  border-b-4 border-secondary-color uppercase py-4"
                : "text-[16px] uppercase text-primary-color  hover:text-secondary-color"
            }
          >
            Get Support
          </Link>
        </div>
        <div className="ml-6">
          <Link
            href="/pricing"
            className="text-[16px] bg-secondary-color font-semibold px-6 py-1 rounded-full uppercase text-white"
          >
            Pricing
          </Link>
        </div>
        <div>
          <Link
            href="/login"
            className="text-[16px] uppercase text-secondary-color font-semibold"
          >
            Sign in
          </Link>
        </div>
        <div>
          <Link
            href="/register"
            className="text-[16px] uppercase text-secondary-color font-semibold"
          >
            Sign up
          </Link>
        </div>
      </div>
      <div className="-mr-10 lg:hidden">
        <BiMenuAltRight
          className="w-8 h-8 cursor-pointer"
          onClick={() => setShowOverlay(!showOverlay)}
        />
      </div>

      {showOverlay && (
        <div className="fixed inset-0 bg-black opacity-90 z-0">
          <div className=" bg-white  px-3 py-24 z-10">
            <div className="py-2">
              <Link
                href="/"
                className="text-[16px] uppercase text-gray-900 font-bold hover:text-secondary-color"
              >
                Home
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/developer"
                className="text-[16px] uppercase text-gray-900 font-bold hover:text-secondary-color"
              >
                Developer
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/support"
                className="text-[16px] uppercase text-gray-900 font-bold hover:text-secondary-color"
              >
                Support
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/pricing"
                className="text-[16px] uppercase text-gray-900 font-bold hover:text-secondary-color"
              >
                Pricing
              </Link>
            </div>

            <div className="flex py-4 gap-x-4">
              <div>
                <Link
                  href="/login"
                  className="text-[16px] uppercase text-white font-bold bg-secondary-color px-4 py-2 rounded-lg"
                >
                  Login
                </Link>
              </div>
              <div>
                <Link
                  href="/register"
                  className="text-[16px] uppercase text-white font-bold bg-secondary-color px-4 py-2 rounded-lg"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
