import Head from "next/head";
import Image from "next/image";
// import { Inter } from "next/font/google";
import PagesLayout from "@/components/PagesLayout";
import Features from "@/components/Features";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>EaziSend</title>
        <meta name="description" content="EaziSend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://unpkg.com/flowbite@1.4.4/dist/flowbite.js"></script> */}
      </Head>

      <PagesLayout>
        <Features />
        <div className="">
          <div className="flex flex-col-reverse px-10 gap-y-8 lg:flex-row items-center gap-x-6 py-20 justify-between lg:px-48 bg-gray-50">
            <div className=" md:flex-1  flex flex-col gap-y-6">
              <h2 className="text-2xl font-semibold text-[#384A5C]">
                <span className=" w-3">
                  <span className="underline decoration-[5px] decoration-[#F88B1A] underline-offset-[16px]">
                    3r
                  </span>
                  d Party API Integration
                </span>
              </h2>
              <p className="text-[#74746B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            <div className="flex md:flex-1">
              <Image
                src="/img/team.jpg"
                width={540}
                height={482}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col px-10 gap-y-8 lg:flex-row items-center gap-x-6 py-20 justify-between lg:px-48">
            <div className="flex md:flex-1">
              <Image
                src="/img/team.jpg"
                width={540}
                height={482}
                alt=""
                className="rounded-lg"
              />
            </div>
            <div className=" md:flex-1  flex flex-col gap-y-6">
              <h2 className="text-2xl font-semibold text-[#384A5C]">
                <span className=" w-3">
                  <span className="underline decoration-[5px] decoration-[#F88B1A] underline-offset-[16px]">
                    Sc
                  </span>
                  an to Pay (Quick Response Codes)
                </span>
              </h2>
              <p className="text-[#74746B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse px-10 gap-y-8 lg:flex-row items-center gap-x-6 py-20 justify-between lg:px-48 bg-gray-50">
            <div className=" md:flex-1  flex flex-col gap-y-6">
              <h2 className="text-2xl font-semibold text-[#384A5C]">
                <span className=" w-3">
                  <span className="underline decoration-[5px] decoration-[#F88B1A] underline-offset-[16px]">
                    Bi
                  </span>
                  ll Payments
                </span>
              </h2>
              <p className="text-[#74746B]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged
              </p>
            </div>
            <div className="flex md:flex-1">
              <Image
                src="/img/team.jpg"
                width={540}
                height={482}
                alt=""
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </PagesLayout>
    </>
  );
}
