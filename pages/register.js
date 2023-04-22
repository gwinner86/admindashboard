import React from "react";
import { BiLastPage } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

function register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitEventHandler = (e) => {
    console.log(e);
  };

  return (
    <div className="flex items-center justify-between w-full">
      <div className="hidden md:block w-1/2">
        <div className="flex">
          <Image
            src="/img/login-image.jpg"
            alt=""
            width={900}
            height={1000}
            className="w-full h-screen object-cover bg-right-bottom"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 h-screen flex flex-col py-20">
        <div className="flex items-center justify-center gap-x-5 py-4">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Login logo"
              width={120}
              height={120}
            />
          </Link>

          {/* <h2 className="text-2xl font-bold cursor-pointer text-secondary-color">
            Login
          </h2> */}
        </div>
        <div className="px-6 md:px-14 lg:px-40">
          <form
            className="w-full"
            onSubmit={handleSubmit(onSubmitEventHandler)}
          >
            <div class="mb-6">
              <label
                htmlFor="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                placeholder="godwin@gmail.com"
                {...register("emailaddress", {
                  required: false,
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

            <div class="mb-6">
              <label
                htmlFor="mobile"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Mobile number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                placeholder="Mobile number"
                {...register("phone", {
                  required: "Mobile number is required",
                  pattern: {
                    value: /^[0-9\b]+$/,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && (
                <span className="text-red-600">{errors.phone?.message}</span>
              )}
            </div>

            <div class="mb-6">
              <label
                for="htmlFor"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
            </div>

            <div class="mb-6">
              <label
                for="htmlFor"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm password"
                id="confirm_password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                {...register("confirm_password", {
                  required: "Confirm password is required",
                  validate: (val) => {
                    if (watch("password") !== val) {
                      return "Password and confirm password do not match";
                    }
                  },
                })}
              />
              {errors.confirm_password && (
                <span className="text-red-600">
                  {errors.confirm_password?.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              class="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-lighter-secondary-color"
            >
              Register
            </button>
          </form>

          <div class="flex items-center py-6 px-2">
            <hr class="flex-grow border-gray-300 mr-4" />
            <span class="text-gray-400">OR</span>
            <hr class="flex-grow border-gray-300 ml-4" />
          </div>
          <p className="text-center  text-gray-400 font-semibold">
            Already have account ?{" "}
            <Link href="/login">
              <span className="text-secondary-color">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default register;
