import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="">
      <hr />
      <div className="flex flex-col lg:flex-row items-center justify-between py-6 lg:mx-52 z-50">
        <div className="flex flex-col gap-y-3">
          <p className="text-[13px] uppercase">Download our mobile app</p>
          <div className="flex gap-x-3">
            <Link target="_blank" href="/app">
              <Image
                src="/img/footer-download-from-google-play.svg"
                width={120}
                height={120}
                alt="Android download"
              />
            </Link>
            <Link target="_blank" href="/app">
              <Image
                src="/img/footer-download-from-app-store.svg"
                width={120}
                height={120}
                alt="Ios download"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-4 lg:flex-row items-center gap-x-8 py-5 justify-between">
          <div className="flex flex-col gap-y-1">
            <h2 className="uppercase text-[13px] mb-3">Company</h2>
            <Link href="/about" className="text-[12px] text-gray-500">
              About
            </Link>
            <Link href="/contact" className="text-[12px] text-gray-500">
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-y-1">
            <h2 className="uppercase text-[13px] mb-3">CORPORATE & LEGAL</h2>
            <Link href="/terms" className="text-[12px] text-gray-500">
              Terms & conditions
            </Link>
            <Link href="/policies" className="text-[12px] text-gray-500">
              Privacy policies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
