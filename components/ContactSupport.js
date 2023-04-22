import React from "react";
import { useForm } from "react-hook-form";

function ContactSupport() {
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
    <div className="bg-[#F7F8FC]">
      <div className="mt-20 bg-support-color rounded-lg pb-28 pt-4 mx-4 px-5 text-center">
        <h2 className="text-lg font-semibold py-4">
          Do you have any specific need?
        </h2>
        <p className="text-sm text-left py-2">
          If you have any specific feature you want us to your listing. We are
          glad to help. Please tell us exactly what you want
        </p>
        <h4 className="text-left py-1">Feature request</h4>

        <form className="w-full" onSubmit={handleSubmit(onSubmitEventHandler)}>
          <div className="mb-5 text-left">
            <textarea
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              name="message"
              placeholder="How can we help you ?"
              rows={5}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-600 ">Message is required</span>
            )}
          </div>

          <div className=" text-left">
            <button
              type="submit"
              className="bg-secondary-color text-white px-4 py-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSupport;
