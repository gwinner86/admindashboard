import React, { useState } from "react";
import { BiLastPage } from "react-icons/bi";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import AuthLayout from "@/components/AuthLayout";

import BaseUrl from "../components/constant/index";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [showLoader, setShowLoader] = useState(false);

  const onSubmitEventHandler = (data) => {
    // console.log(data);

    const userData = {
      name: data.name,
      email: data.emailaddress,
      sender_name: data.senderName,
      password: data.password,
    };
    setShowLoader(true);
    axios
      .get(`${BaseUrl.URL}/sanctum/csrf-cookie`)
      .then((response) => {
        BaseUrl.BasicAxios.post("/admin/api/signup", userData)
          .then((response) => {
            setShowLoader(false);
            if (response.data.status) {
              sessionStorage.setItem("tempData", JSON.stringify(userData));
              router.push("/verify");
            } else {
              toast.error(response.data.message);
            }
          })
          .catch((error) => {
            console.log("Error 1 : ", error);
            toast.error(error);
          });
      })
      .catch((error) => {
        console.log(" Error : ", error);
        toast.error(error);
      });
  };

  return (
    <div>
      <Loader showLoader={showLoader} />
      <AuthLayout>
        <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-x-5 mb-5">
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
                  id="email"
                  className="form-control"
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

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Company name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Company name"
                  {...register("name", {
                    required: "Company name is required",
                  })}
                />
                {errors.phone && (
                  <span className="text-red-600">{errors.phone?.message}</span>
                )}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Sender name
                </label>
                <input
                  type="text"
                  id="senderName"
                  name="senderName"
                  className="form-control"
                  placeholder="Enter sender name"
                  {...register("senderName", {
                    required: "Sender name is required",
                  })}
                />
                {errors.phone && (
                  <span className="text-red-600">
                    {errors.senderName?.message}
                  </span>
                )}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  id="password"
                  className="form-control"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>

              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  placeholder="Confirm password"
                  id="confirm_password"
                  className="form-control"
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
                className="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-lighter-secondary-color"
              >
                Register
              </button>
            </form>

            <div className="flex items-center py-6 px-2">
              <hr className="flex-grow border-gray-300 mr-4" />
              <span className="text-gray-400">OR</span>
              <hr className="flex-grow border-gray-300 ml-4" />
            </div>
            <p className="text-center  text-gray-400 font-semibold">
              Already have account ?{" "}
              <Link href="/login">
                <span className="text-secondary-color">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default Register;
