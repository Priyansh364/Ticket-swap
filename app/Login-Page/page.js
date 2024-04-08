"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";

import Footer from "@/components/Footer.js";
import Navbar from "@/components/Navbar.js";
import "@/components/Navbar.css"

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

        <Navbar/>
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          
          <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0">
            <h2 className="text-white text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-100">
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
              <label htmlFor="password" className="leading-7 text-sm text-gray-100">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            
            <button onClick={handleSubmit} className="text-white bg-sky-500 border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 rounded text-lg">
              Submit
            </button>
            
            <div className="flex justify-between">
              <Link href={"/Register-Page"} className="text-xs hover:text-blue-500 hover:cursor-pointer text-gray-400 mt-3">Create a new Account</Link>
              <div className="text-xs hover:text-blue-500 hover:cursor-pointer text-gray-400 mt-3">Forgot Password ?</div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default page;
