import React, { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { OutTable, ExcelRenderer } from "react-excel-renderer";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateContact() {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset({
      data: {},
    });
  }, [handleSubmit]);

  const fileHandler = (e) => {
    //let fileObj = event;
    const fileObj = Array.from(e.target.files);
    console.log("files:", fileObj);

    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          cols: resp.cols,
          rows: resp.rows,
        });
        console.log(resp);
      }
    });
  };

  const CreatContactEventHandler = (e) => {
    console.log(e);
    console.log(dateOfBirth);
  };

  return (
    <div className="py-20 px-2">
      <h2 className="font-semibold pb-2">Upload contacts via excel</h2>

      <div class="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <FiUploadCloud className="w-8 h-8 text-gray-500" />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              xlsx , xls
            </p>
          </div>
          {/* <input id="dropzone-file" type="file" class="hidden" /> */}
          <input
            id="dropzone-file"
            type="file"
            onChange={fileHandler}
            className="hidden"
            style={{ padding: "10px" }}
          />
        </label>
      </div>

      <div class="flex items-center py-6 px-2">
        <hr class="flex-grow border-gray-300 mr-4" />
        <span class="text-gray-400">OR</span>
        <hr class="flex-grow border-gray-300 ml-4" />
      </div>
      <h2 className="font-bold">Add a new contact</h2>

      <div className="bg-white p-2 rounded-lg">
        <form
          className="w-full"
          onSubmit={handleSubmit(CreatContactEventHandler)}
        >
          <div class="mb-6">
            <label
              htmlFor="name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              placeholder="full name"
              {...register("name", {
                required: false,
              })}
            />
          </div>
          <div class="mb-6">
            <label
              htmlFor="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Phone number
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              placeholder="Phone number"
              {...register("phone", {
                required: true,
              })}
            />
            {errors.phone && (
              <span className="text-red-600">Phone number is required</span>
            )}
          </div>
          <div className="mb-6">
            <label
              forhtml="dob"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date of birth
            </label>
            <DatePicker
              selected={dateOfBirth}
              dateFormat="dd/MM/yyyy"
              showYearDropdown
              scrollableMonthYearDropdown
              onChange={(date) => setDateOfBirth(date)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              forhtml="group"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Add to default group
            </label>
            <select
              id="group"
              name="group"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-gray-100 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-100 dark:focus:border-gray-100"
              {...register("group", {
                required: false,
              })}
            >
              <option>Select a group</option>
              <option value="US" selected>
                None
              </option>

              {/* <option value="CA">Canada</option> */}
            </select>
          </div>
          <div className=" text-left">
            <button
              type="submit"
              className="bg-secondary-color text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContact;
