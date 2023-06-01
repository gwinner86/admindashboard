import React from "react";
import PagesLayout from "@/components/PagesLayout";
import { useForm } from "react-hook-form";

function Developer() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitEventHandler = (e) => {
    // e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <PagesLayout>
        {/* <div className="contact-bg-img ">
          <div className="flex flex-col items-center justify-center text-white text-center py-44">
            <h3 className="uppercase text-[14px] font-semibold">Contact us</h3>
            <p className="text-3xl font-bold">We are here to help you!</p>
          </div>
        </div>
        <div className="px-48 mx-48 py-24 -mt-20 bg-white">
          <div className="py-6">
            <h1 className="font-semibold text-2xl text-gray-700 py-2">
              Complaints?
            </h1>
            <p className="text-gray-600 leading-7 tracking-wide font-light">
              We are sorry you are not happy. We want to aid you as soon as
              possible, so please give us a ring on{" "}
              <span className="text-blue-400 cursor-pointer hover:underline">
                +233 501373575.
              </span>
              If you’d rather complain in writing, please email us at
              <span className="text-blue-400 cursor-pointer hover:underline">
                {" "}
                dunyahg@gmail.com
              </span>
            </p>
          </div>
          <div className="py-6">
            <h1 className="font-semibold text-2xl text-gray-700 py-2">
              Looking to Integrate?
            </h1>
            <p className="text-gray-600 leading-7 tracking-wide font-light">
              Are you interested in accepting payments with expressPay? Our
              integrations team is standing by to assist. Message us on
              <span className="text-blue-400 cursor-pointer hover:underline">
                +233 501373575.
              </span>{" "}
              If you’d rather complain in writing, please email us at
              <span className="text-blue-400 cursor-pointer hover:underline">
                {" "}
                dunyahg@gmail.com
              </span>
            </p>
          </div>
          <div className="py-6">
            <h1 className="font-semibold text-2xl text-gray-700 py-2">
              Leave us a Message
            </h1>
            <p className="text-gray-600 leading-7 tracking-wide font-light">
              How can we help? Leave a message below to have a service
              representative follow up with you shortly.
            </p>
          </div>
          <div className=" py-3 flex flex-col gap-y-3">
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmitEventHandler)}
            >
              <div className="mb-4">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                  placeholder="Your full name"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                  placeholder="godwin@gmail.com"
                  name="emailaddress"
                  {...register("emailaddress", {
                    required: "Email address is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.emailaddress && (
                  <span className="text-red-600">
                    {errors.emailaddress?.message}
                  </span>
                )}
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  className="flex items-center bg-gray-100 p-3 outline-none w-full"
                  placeholder="Message title"
                  name="title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-red-600">Title is required</span>
                )}
              </div>
              <div className="mb-5">
                <textarea
                  className="flex items-center bg-gray-100 p-3 outline-none w-full"
                  name="message"
                  placeholder="How can we help you ?"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-red-600">Message is required</span>
                )}
              </div>
              <div className="mb-5">
                <button
                  type="submit"
                  className="bg-secondary-color text-white w-full p-3"
                >
                  {" "}
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div> */}
        <h2 className="text-4xl text-center font-bold py-20">
          {" "}
          Under development
        </h2>
      </PagesLayout>
    </div>
  );
}

export default Developer;
