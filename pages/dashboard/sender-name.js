import React from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { FiCheck } from "react-icons/fi";
import { useForm } from "react-hook-form";
import ContactSupport from "@/components/ContactSupport";

function senderName() {
  const Test = (e) => {
    console.log(e);
  };

  const AddSenderNameEventhandler = (e) => {
    console.log(e);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <DashboardLayout subtitle="Sender names">
      <div className="flex flex-col gap-x-2 gap-y-2 lg:flex-row justify-between">
        <div className="w-[90%]   lg:flex-1 lg:py-8 ml-6">
          <div className="flex flex-col gap-y-10">
            <div>
              <h2 className="font-bold py-6">List of sender names</h2>
              <div className="flex items-center gap-x-3 my-3 bg-white p-4 rounded-md">
                <div className="p-2 bg-green-400 rounded-full">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h2 className="">ICGC Christ temple</h2>
                  <p className="text-gray-400 text-sm font-semibold">
                    Authorized
                  </p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={Test}
                    className="px-4 py-px bg-white text-gray-900 border-[1px] border-secondary-color rounded-lg hover:bg-secondary-color hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-x-3 my-3 bg-white p-4 rounded-sm">
                <div className="p-2 bg-yellow-300 rounded-full">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h2 className="">ICGC Christ temple</h2>
                  <p className="text-gray-400 text-sm font-semibold">Pending</p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={Test}
                    className="px-4 py-px bg-white text-gray-900 border-[1px] border-secondary-color rounded-lg hover:bg-secondary-color hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-x-3 my-3 bg-white p-4 rounded-sm">
                <div className="p-2 bg-red-600 rounded-full">
                  <FiCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h2 className="">ICGC Christ temple</h2>
                  <p className="text-gray-400 text-sm font-semibold">Removed</p>
                </div>
                <div className="ml-auto">
                  <button
                    onClick={Test}
                    className="px-4 py-px bg-white text-gray-900 border-[1px] border-secondary-color rounded-lg hover:bg-secondary-color hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold py-6">Add sender name</h2>

              <div className="flex flex-col items-left bg-white rounded-lg p-6">
                <form onSubmit={AddSenderNameEventhandler}>
                  <div class="mb-6">
                    <label
                      for=""
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Sender name
                    </label>
                    <input
                      type="text"
                      name="sendername"
                      id="password"
                      placeholder="Enter sender name"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
                      {...register("sendername", { required: true })}
                    />
                    {errors.sendername && (
                      <span className="text-red-600">
                        Sender name is required
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    class="text-white bg-secondary-color hover:bg-lighter-secondary-color focus:outline-none focus:ring-lighter-secondary-color font-medium rounded-lg text-sm   px-5 py-2.5 text-center dark:bg-secondary-color dark:hover:bg-lighter-secondary-color dark:focus:ring-offset-lighter-secondary-color"
                  >
                    Submit for review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pb-10 items-center lg:w-96">
          <ContactSupport />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default senderName;
