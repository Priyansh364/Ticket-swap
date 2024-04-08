"use client";
import React from "react";
import { useState } from "react";

import Footer from "@/components/Footer.js";
import Navbar from "@/components/Navbar.js";
import "@/components/Navbar.css";
import Link from "next/link";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement your login logic, such as sending credentials to a server for validation
    console.log("Logging in with:", { username, password });

  };
  return (
    <div>
      <div className="">
        <Navbar />
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-xl font-medium title-font mb-5">
              Register
            </h2>
            <form action="/Login-Page">
              <div className="relative mb-4">
                <label
                  htmlFor="FirstName"
                  className="leading-7 text-sm text-gray-100"
                >
                  First Name
                </label>
                <input
                  type="FirstName"
                  id="FirstName"
                  name="FirstName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="LastName"
                  className="leading-7 text-sm text-gray-100"
                >
                  Last Name
                </label>
                <input
                  type="LastName"
                  id="LastName"
                  name="LastName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="CompanyName"
                  className="leading-7 text-sm text-gray-100"
                >
                  Company Name
                </label>
                <input
                  type="CompanyName"
                  id="CompanyName"
                  name="CompanyName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="CompanyType"
                  className="leading-7 text-sm text-gray-100"
                >
                  Company Type
                </label>
                <input
                  type="CompanyType"
                  id="CompanyType"
                  name="CompanyType"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Country"
                  className="leading-7 text-sm text-gray-100"
                >
                  Country/Region
                </label>
                <input
                  type="Country"
                  id="Country"
                  name="Country"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-100"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="PhoneNumber"
                  className="leading-7 text-sm text-gray-100"
                >
                  Phone Number
                </label>
                <input
                  type="PhoneNumber"
                  id="PhoneNumber"
                  name="PhoneNumber"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="Message"
                  className="leading-7 text-sm text-gray-100"
                >
                  Message
                </label>
                <textarea
                  className="  text-xs rounded-md w-full border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200  outline-none text-gray-700  px-3 leading-6 py-1 transition-colors duration-200 ease-in-out"
                  placeholder="Write your message here"
                  name="Message"
                  id="Message"
                  cols="80"
                  rows="8"
                ></textarea>
              </div>

              <button className="text-white mx-52 bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">
                Submit
              </button>
            </form>

            <div className="flex justify-between"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
