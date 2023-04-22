import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmitEventHandler = (e) => {
    console.log(e);
    router.push("/dashboard");
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
      <div className="w-full md:w-1/2 h-screen flex flex-col pt-40">
        <div className="flex items-center justify-center gap-x-5 py-6">
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
            <div class="mb-6">
              <label
                for="htmlFor"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-600">Password is required</span>
              )}
            </div>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <Link href="/">
                  <p className="text-secondary-color hover:underline">
                    Forgot password ?
                  </p>
                </Link>
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-offset-lighter-secondary-color"
            >
              Login
            </button>
          </form>

          <div class="flex items-center py-6 px-2">
            <hr class="flex-grow border-gray-300 mr-4" />
            <span class="text-gray-400">OR</span>
            <hr class="flex-grow border-gray-300 ml-4" />
          </div>
          <p className="text-center  text-gray-400 font-semibold">
            Don't have account ?{" "}
            <Link href="/register">
              <span className="text-secondary-color">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
