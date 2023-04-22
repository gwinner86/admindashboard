import React from "react";
import PagesLayout from "@/components/PagesLayout";
import { useForm } from "react-hook-form";

function pricing() {
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
        <div className="contact-bg-img ">
          <div className="flex flex-col items-center justify-center text-white text-center py-44">
            <h3 className="uppercase text-[14px] font-semibold">Pricing</h3>
            <p className="text-3xl font-bold">
              We provide you with the best pricing!
            </p>
          </div>
        </div>
        <div className="px-10 py-10 md:px-16 lg:px-32 md:mx-12 md:16  lg:mx-48 lg:py-24 -mt-20 bg-white">
          <div className="py-6">
            <div class="relative overflow-x-auto ">
              <table class="w-full text-sm text-left border-[1px] border-gray-400 text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Product name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Color
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple MacBook Pro 17
                    </th>
                    <td className="px-6 py-4">Silver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td className="px-6 py-4">$1999</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Magic Mouse 2
                    </th>
                    <td className="px-6 py-4">Black</td>
                    <td className="px-6 py-4">Accessories</td>
                    <td className="px-6 py-4">$99</td>
                  </tr>
                  <tr class="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Google Pixel Phone
                    </th>
                    <td className="px-6 py-4">Gray</td>
                    <td className="px-6 py-4">Phone</td>
                    <td className="px-6 py-4">$799</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Apple Watch 5
                    </th>
                    <td className="px-6 py-4">Red</td>
                    <td className="px-6 py-4">Wearables</td>
                    <td className="px-6 py-4">$999</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </PagesLayout>
    </div>
  );
}

export default pricing;
