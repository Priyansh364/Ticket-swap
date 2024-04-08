"use client";
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import Head from "next/head";
import Link from "next/link";
import { useState, useRef } from "react";

export default function Home() {

  const [reff1, setreff1] = useState(0)

  const handlenext = () => {

    if (reff1 >= -1 && reff1 < array.length) {
      var a
      if (reff1 < 0) {
         a=reff1+2

        setreff1(reff1+2) 
      }else{
         a=reff1+1

        setreff1(reff1+1) 

      }

      console.log(a);

      const element = document.getElementById(a);

      element?.scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      });
    }
  };
  const handleprevius = () => {

      if (reff1 >= 0 && reff1 < array.length + 2) {

        var a
      if (reff1 > array.length-1) {
         a=reff1-2

        setreff1(reff1-2) 
      }else{
         a=reff1-1

        setreff1(reff1-1) 

      }
        console.log(a);
        
        const element = document.getElementById(a);
        
        element?.scrollIntoView({
          behavior: "smooth",
          inline: "start",
          block: "nearest",
        });
      }
    
  };


  

  const [array, setarray] = useState([
    {
      src: "https://cdn.ticketswap.com/public/202402/8a030fa9-6248-4684-8a97-b07e8fd98b9a.e4c7860c723280520c54c1a77a7df1943331774d.png",
      headding: "22 of the most popular music festivals in Europe 2024",
      info: "Seeking your next festival? Where to head as a fan this year in Europe",
      id: "0",
    },
    {
      src: "https://cdn.ticketswap.com/public/202403/5fd0aeb3-a8e3-47fd-86f0-0e322cea0a1a.78b5bd8cbf7293f780fa33018e2b33ba75ddf06e.png",
      headding: "12 festivals all techno fans should attend in 2024",
      info: "From parties under motorways to industrial raves.",
      id: "1",
    },
    {
      src: "https://cdn.ticketswap.com/public/202401/2b7f6d1e-8350-4f1e-bcb8-448a7d54f972.f82f55ba03f8b3016fd9a38eee3cec7dc32f28e9.png",
      headding: "21 of the best spring festivals around the world in 2024",
      info: "Where to celebrate the arrival of spring (and return of vitamin D)...",
      id: "2",
    },
    {
      src: "https://cdn.ticketswap.com/public/202403/a33c7d81-187f-44c7-b8ab-ba07b003bb5a.1f02ec8afb25d74140e8b6eaf3944938e70e9e83.png",
      headding: "6 Festivals in Germany to try in 2024",
      info: "  From festivals under 500 year-old trees to famous jazz gatherings.",
      id: "3",
    },
    {
      src: "https://cdn.ticketswap.com/public/202403/ece14ab7-8772-4f7d-885e-64918617feb7.ec28306c62795f2a1e7edffefbc26d8808b41d0d.png",
      headding: "F1 Schedule 2024",
      info: "Your need-to-know guide to the Formula 1 season.",
      id: "4",
    },
    {
      src: "https://cdn.ticketswap.com/public/202401/df56ef0f-0f4d-4139-b6e8-69dd716db9ad.29882e40e52cda93a3c1e4ebac570511b82b43b6.png",
      headding: "12 unmissable rock and metal festivals in Europe.",
      info: "From the UK’s Download fest to Graspop Metal Meeting – and beyond.",
      id: "5",
    },
  ]);

  return (
    <>
      <div className="  box199 ">
        <Navbar />
        <div className=" text-white flex mx-48  px-5 h-[70%] m-2 justify-start flex-col items-center">
          <div className="yoi">The safest way to buy and sell tickets</div>
          <input
            className="searchbar"
            type="text"
            placeholder="Search for an event ,artist venue or city"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className=" text-white flex simolbox m-2 justify-between items-center">
          <div className="flex gap-2 font-medium my-6 flex-col">
            <div className="flex gap-2 text-sm">
              <img
                className="w-5 font-extrabold"
                src="/tickk.svg"
                alt="no tick"
              />
              The safest way to buy and sell tickets with over 10 million fans
            </div>
            <div className="flex gap-2 text-sm">
              <img
                className="w-5 font-extrabold"
                src="/tickk.svg"
                alt="no tick"
              />
              Prices are capped at 20% above face value
            </div>
            <div className="flex gap-2 text-sm">
              <img
                className="w-5 font-extrabold"
                src="/tickk.svg"
                alt="no tick"
              />
              Primary tickets from over 6000 partnered events
            </div>
          </div>
          <div>
            <Link
              href="https://www.trustpilot.com/review/ticketswap.com"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              <img
                src="https://ticketswap-image-cdn.b-cdn.net/static/images/trustpilot/trustpilot-logo-dark.png"
                className="w-28 mb-3"
              />
              <img
                src="https://images-static.trustpilot.com/api/stars/4.5/star.svg"
                alt="10011 reviews"
                className="my-2 w-28"
              />
              <p className="text-xs text-gray-400">10011 reviews</p>
            </Link>
          </div>
        </div>
        <div className="w-full h-[1px] bg-slate-700"></div>
        <div className=" text-white flex flex-col simolbox m-2 justify-center  items-center">
          <div className="border-slate-700 border border-1 w-full p-3 m-7 px-20  rounded-lg ">
            You're seeing recommendations for
            <select
              className="bg-inherit appearance-none border-slate-500 mx-5 px-5 text-lg border-2 text-gray-500 rounded-lg p-1"
              name="Nearby"
              id="nearby"
            >
              <option className="" value="nearby">
                Nearby
              </option>
              <option value="NewYork"> New York</option>
              <option value="Miyami"> Miyami</option>
              <option value="LasVagus"> Las Vagus</option>
              <option value="Chicago"> Chicago</option>
              <option value="othercity">Other City</option>
            </select>
          </div>
        </div>
        <div className=" text-white flex flex-col simolbox m-2  items-center">
          <div className="text-3xl w-full m-2 font-semibold">
            Explore Events
          </div>
        </div>

        <div className=" text-white flex flex-col simolbox m-2  gap-0 items-center">
          <div className="w-full m-1 rounded-xl p-3 px-4  bg-[#00131a] gap-5 flex">
            <div>
              <img
                className="w-14"
                src="https://cdn.ticketswap.com/static/images/discovery-feed/today.png"
                alt="sds"
              />
            </div>
            <div>
              <div className="text-lg">Today</div>
              <div className=" text-[#99a1a3]">
                Find gigs nearby for your spontaneous plans
              </div>
            </div>
          </div>
          <div className="w-full m-1 rounded-xl p-3 px-4  bg-[#00131a] gap-5 flex">
            <div>
              <img
                className="w-14"
                src="https://cdn.ticketswap.com/static/images/discovery-feed/this-weekend.png"
                alt="sds"
              />
            </div>
            <div>
              <div className="text-lg">This weekend</div>
              <div className=" text-[#99a1a3]">
                See upcoming events on Friday, Saturday & Sunday
              </div>
            </div>
          </div>

          <div className="w-full m-1 rounded-xl p-3 px-4  bg-[#00131a] gap-5 flex">
            <div>
              <img
                className="w-14"
                src="https://cdn.ticketswap.com/static/images/discovery-feed/browse-all.png"
                alt="sds"
              />
            </div>
            <div>
              <div className="text-lg">Search your way</div>
              <div className=" text-[#99a1a3]">
                Set location, date & category
              </div>
            </div>
          </div>
        </div>
        <div className=" text-white flex flex-col simolbox  m-2  gap-0 items-center">
          <div className="flex mt-5 w-full justify-between">
            <div>
              <div className="text-3xl">TicketSwap magazine</div>
              <div className="text-[#98a1a3] my-2">
                Browse handpicked events, interviews and more.
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div onClick={handleprevius} className="hover:cursor-pointer rounded-xl hover:bg-[#192a35] ">
                {
                  reff1<1?<img src="/previousicon1.svg" alt="" />:<img src="/previousicon.svg" alt="" />
                }
              </div>
              <div onClick={handlenext} className="hover:cursor-pointer rounded-xl hover:bg-[#192a35] items-center flex">
              {
                  reff1>=array.length-1?<img src="/nexticon1.svg" alt="" />:<img src="/nexticon.svg" alt="" />
                }
              </div>
            </div>
          </div>
          <div
            className="flex flex-nowrap simolbox gap-3 overflow-scroll no-scrollbar"
            id="slider"
          >
            {array.map((item) => (
              <div key={item.id}>
                <div id={item.id} className="picture1 rounded-lg flex">
                  <div className=" container99 rounded-l-xl">
                    <img
                      className="rounded-l-xl transition-transform duration-[4000ms] hover:scale[1.3]"
                      src={item.src}
                      alt=" no pic"
                    />
                  </div>
                  <div className="p-5  rounded-r-xl  w-52 bg-[#00131a] ">
                    <div className="text-wrap text-white">{item.headding}</div>
                    <div className="text-[#98a1a3] text-wrap text-xs">
                      {item.info}
                    </div>
                    <button className=" text-[#98a1a3]  border990 border-[#98a1a3] ">
                      {" "}
                      Articles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}
