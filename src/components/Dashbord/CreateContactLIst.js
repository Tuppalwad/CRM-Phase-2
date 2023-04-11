import React from "react";
import DNavbar from "./DNavbar";
function CreateContactLIst() {
  return (
    <>
      <DNavbar></DNavbar>
      <div className=" container w-[90%] md:w-4/5 mx-auto my-24 bg-white shadow-lg ">
        <div>
          <h1 className="text-2xl pt-2 text-center">Create Contact List</h1>
        </div>
        <div className="container w-full  p-3 md:p-6">
          <form>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-dark-100"
                for="multiple_files"
              >
                File Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="File Name"
                required
              />
            </div>
            <div>
              <label
                class="block my-3 mb-2 text-sm font-medium text-gray-900 dark:text-dark-100"
                for="multiple_files"
              >
                Upload multiple files
              </label>
              <input
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none   py-2 pl-2"
                id="multiple_files"
                type="file"
                multiple
              />
            </div>
            <button class="bg-blue-500 my-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Button
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateContactLIst;
