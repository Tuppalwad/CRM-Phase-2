import { style } from "@mui/system";
import React, { useState } from "react";
import "../../style.css";
import Button from "./Button";
// import AiOutlineMenuUnfold from "react-icons/ai";
// import AiOutlineMenuFold from "react-icons/ai";
function Navbar() {
  let Links = [
    { name: "Solutions", link: "/" },
    { name: "Pricing", link: "/" },
    { name: "Features", link: "/" },
    { name: "About", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0  ">
      <div className="md:flex items-center  bg-white py-3 md:px-10 px-7 navbarhight">
        <div
          className=" font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800 "
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          <span className="text-2xl text-indigo-600">CRM</span>
          <span className="text-2xl text-gray-800">Tool</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="    text-3xl absolute right-8 top-6  cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <div className="md:hidden w-12 h-10 absolute right-12 top-7 cursor-pointer">
          {/* user icon here */}
          <ion-icon
            name="person-circle-outline"
            style={{ width: "30px", height: "20px" }}
          ></ion-icon>
        </div>

        <ul
          className={`  ml-48  md:flex   md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-18 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="  md:ml-8 text-md md:my-0 my-6">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* how to do phone mode dislply none and desktop mode display block in tailwind css for login and signup button */}

        <div className="flex  md:ml-auto md:mr-0 mr-auto md:mt-0 mt-8  ">
          <button className=" mr-6 py-1 lg:flex inPhonemode " name="Login">
            {" "}
            Log In
          </button>
          <button
            className=" bg-bluebg-blue-500 bg-blue-700 text-white py-2  font-bold  px-4 rounded-full  md:flex inPhonemode "
            style={{ marginTop: "-5px" }}
          >
            {" "}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
