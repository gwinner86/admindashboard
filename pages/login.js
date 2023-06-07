import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import AuthLayout from "@/components/AuthLayout";
import axios from "axios";
import BaseUrl from "../components/constant/index";
import Loader from "@/components/Loader";

import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [showLoader, setShowLoader] = useState(false);

  const onSubmitEventHandler = (e) => {
    setShowLoader(true);
    axios
      .get(`${BaseUrl.URL}/sanctum/csrf-cookie`)
      .then((response) => {
        const loginData = {
          email: e.emailaddress,
          password: e.password,
        };
        BaseUrl.BasicAxios.post("/admin/api/login", loginData)
          .then((response) => {
            console.log(" response login : ", response.data);
            setShowLoader(false);
            if (response.data.status) {
              router.push("/dashboard");
              sessionStorage.setItem(
                "UserData",
                JSON.stringify(response.data.extra)
              );
            } else {
              toast.error(response.data.message);
            }
          })
          .catch((error) => {
            console.log("Error : ", error);
          });
      })
      .catch((error) => {
        console.log("Error login : ", error);
      });
  };

  return (
    <div>
      <Loader showLoader={showLoader} />
      <AuthLayout>
        <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center">
          <div className="flex  justify-center mb-5">
            <Link href="/">
              <Image
                src="/img/logo.png"
                alt="Login logo"
                width={140}
                height={80}
                className="bg-cover w-[70%]"
              />
            </Link>

            {/* <h2 className="text-2xl font-bold cursor-pointer text-secondary-color">
            Login
          </h2> */}
          </div>
          <div className="px-6 md:px-14 w-3/4">
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmitEventHandler)}
            >
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  id="emailaddress"
                  name="emailaddress"
                  className="form-control"
                  placeholder="company@comapanyemail.com"
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>
              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <Link href="/">
                    <p className="text-secondary-color hover:underline">
                      Forgot password ?
                    </p>
                  </Link>
                </div>
              </div>

              <button
                type="submit"
                className="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-offset-lighter-secondary-color"
              >
                Login
              </button>
            </form>

            <div className="flex items-center py-6 px-2">
              <hr className="flex-grow border-gray-300 mr-4" />
              <span className="text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300 ml-4" />
            </div>
            <p className="text-center  text-gray-400 font-semibold">
              Don&apost have account ?{" "}
              <Link href="/register">
                <span className="text-secondary-color">Register</span>
              </Link>
            </p>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default Login;
