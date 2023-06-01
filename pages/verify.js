import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import BaseUrl from "../components/constant/index";
import AuthLayout from "@/components/AuthLayout";
import Loader from "@/components/Loader";
import { toast } from "react-toastify";

function Verify() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const [showLoader, setShowLoader] = useState(false);

  const onVerifyUSerCodeEventHandler = (e) => {
    const datafromTemp = JSON.parse(sessionStorage.getItem("tempData"));
    console.log("Data from session : ", datafromTemp?.email);
    const userData = {
      code: e.verify,
      email: datafromTemp.email,
    };
    setShowLoader(true);
    BaseUrl.BasicAxios.post("/admin/api/verify-account", userData)
      .then((response) => {
        setShowLoader(false);
        console.log("verify code : ", response.data);
        if (response.data.status) {
          // CALL THE LOGIN METHOD
          const loginData = {
            email: datafromTemp.email,
            password: datafromTemp.password,
          };
          BaseUrl.BasicAxios.post("/admin/api/login", loginData)
            .then((reponse) => {
              console.log(" login status : ", response.data);
              if (response.data.status) {
                router.push("/dashboard");

                sessionStorage.setItem(
                  "UserData",
                  JSON.stringify(response.data.extra)
                );
                sessionStorage.removeItem("tempData");
              } else {
                toast.error(response.data.message);
              }
            })
            .catch((error) => {
              console.log("Error : ", error);
              toast.error(error);
            });
        }
      })
      .catch((error) => {
        console.log("Error : ", error);
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
                width={130}
                height={130}
              />
            </Link>
          </div>
          <div className="mb-6 text-center text-gray-600">
            <p>
              Kindly enter the verification code sent to your email address.
            </p>
          </div>
          <div className="px-6 md:px-14 w-3/4">
            <form
              className="w-full"
              onSubmit={handleSubmit(onVerifyUSerCodeEventHandler)}
            >
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter verification code
                </label>
                <input
                  type="password"
                  name="verify"
                  id="verify"
                  placeholder="Enter verification code"
                  className="form-control"
                  {...register("verify", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-600">
                    Verification code is required
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-offset-lighter-secondary-color"
              >
                Verify
              </button>
            </form>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
}

export default Verify;
