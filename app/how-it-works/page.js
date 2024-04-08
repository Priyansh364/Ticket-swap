import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar.js";
import "./how.css";
import Head from "next/head";
import Footer from "@/components/Footer.js";

const page = () => {
  return (
    <>
    <div className="howbox">
      
      <div className="howworkbg ">
        <div className="">
          <Navbar class="howworkbg" />
        </div>
        <div className=" text-white flex mx-48 my-14 px-5 flex-col items-center">
          <div className="mb-3 safest">
            The safest way to buy and sell e-tickets
          </div>
          <div className="text-lg text-center  pb-24 p">
            TicketSwap is a safe, convenient and fair place to buy and sell
            e-tickets for concerts, festivals, sports events, theatre and days
            out. Fraud is prevented by strict checks and collaborations with
            organisations and partners.
          </div>
        </div>
      </div>
      <div className="second text-white flex mx-48 my-14 px-5 flex-col items-center">
        <div className="font-bold text-3xl pb-14">Why TicketSwap </div>
        <div className="flex mb-20 gap-14 items-center">
          <div>
            <img
              width="250px"
              src="https://ticketswap-image-cdn.b-cdn.net/static/images/how-does-it-work/why-ticketswap-safe-dark.svg"
              alt="yoi"
            />
          </div>
          <div className="">
            <div>Safe</div>
            <div className="mt-4">
              TicketSwap is safe. The tickets and sellers on our platform are
              verified based on several criteria. Through partnerships with
              organisations and ticket providers, we offer SecureSwap tickets
              which are 100% valid. Read more about SecureSwap here.
            </div>
          </div>
        </div>

        <div className="flex mb-20 gap-14 items-center">
          <div className="mx-2">
            <img
              width="400px"
              src="https://ticketswap-image-cdn.b-cdn.net/static/images/how-does-it-work/why-ticketswap-easy-dark.svg"
              alt="no img"
            />
          </div>
          <div className="">
            <div>Easy</div>
            <div className="mt-4">
              Listing a ticket can be done in a few clicks. Simply upload your
              ticket and provide the required information. After this, you can
              sit back and relax - you will be notified when your ticket has
              been sold and we will transfer the money to your bank account in 3
              business days. Buying a ticket is really easy as well. You can pay
              directly through our app and the ticket will be available in your
              TicketSwap account and sent to your e-mail inbox immediately.
            </div>
          </div>
        </div>
        <div className="flex mb-20 gap-14 items-center">
          <div className="">
            <img
              width="195px"
              src="https://ticketswap-image-cdn.b-cdn.net/static/images/how-does-it-work/why-ticketswap-fair.svg"
              alt="no img"
            />
          </div>
          <div className="">
            <div>Fair</div>
            <div className="mt-4">
              As a TicketSwap fan, you know you'll always be paying a fair price
              for your tickets. We protect buyers from overpricing by keeping to
              a maximum 20% mark-up from the original sales price.
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-slate-400"></div>
    </div>


      <div className=" third text-white flex mx-48 my-14 px-5 flex-col items-center">
        <div className="font-bold text-3xl pb-14">
          Buying Tickets

        </div>
      </div>
      <Footer/>
    </>
  );
};

export default page;
