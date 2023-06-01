import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

function Payementlink() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onpaymentEventhandler = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center pt-12">
      <div className="text-center">
        <div className="mb-3">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Login logo"
              width={120}
              height={120}
              className="m-auto"
            />
          </Link>
        </div>

        <h3 className="text-[18px] mb-2 text-gray-800">Sendbast Topup</h3>
        <p className="text-gray-600 text-[12px] mb-6">BY CODOXO TECHNOLOGIES</p>
        <p className="block mb-6 text-sm font-medium text-gray-700 dark:text-white">
          Top up your sms on sendbast
        </p>
      </div>

      <div className="px-6 md:px-14 lg:px-40 bg-gray-50 py-6 mb-3">
        <form onSubmit={handleSubmit(onpaymentEventhandler)} className="w-auto">
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your email
            </label>
            <input
              type="email"
              id="emailaddress"
              name="emailaddress"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              placeholder="godwin@gmail.com"
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
          <div className="mb-6">
            <label> Amount</label>
            <input
              type="number"
              name="amount"
              id="amount"
              placeholder="Enter amount"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              {...register("amount", { required: true })}
            />
            {errors.amount && (
              <span className="text-red-600">Amount is required</span>
            )}
          </div>

          <button
            type="submit"
            className="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-offset-lighter-secondary-color"
          >
            Pay Now!
          </button>
        </form>
      </div>
      <div className="mb-5">
        <p className="text-gray-400">
          An additional E-levy fee of 1% may apply to this transaction
        </p>
      </div>

      <div className=" flex items-center justify-between"></div>
    </div>
  );
}

export default Payementlink;
