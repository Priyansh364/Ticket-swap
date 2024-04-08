import React from "react";
import "./Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[1px] bg-slate-700"></div>

      <div className="flex mx-44 my-14 justify-center">
        <div className="container">
          <div className="flex  justify-between gap-2 text-gray-400">
            <div className="">
              <ul className="flex flex-col gap-2">
                <li className="text-lg pb-4 text-gray-100">Menu</li>
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
                <Link href={"/how-it-works"} className="hover:text-gray-100">
                  How it works
                </Link>
                <Link href={"/About-us"} className="hover:text-gray-100">
                  About us
                </Link>
                <li className="hover:text-gray-100">Magazine</li>
                <li className="hover:text-gray-100">Jobs</li>
                <li className="hover:text-gray-100">Become a partner</li>
                <li className="hover:text-gray-100">Become an affiliate</li>
                <li className="hover:text-gray-100">Press</li>
              </ul>
            </div>
            <div className="">
              <ul className="flex mb-9 flex-col gap-2">
                <li className="text-lg pb-4 text-gray-100">Follow us</li>
                <Link
                  target="_blank"
                  className="hover:text-gray-100"
                  href={"https://www.facebook.com/TicketSwap"}
                >
                  Facebook
                </Link>
                <Link
                  target="_blank"
                  className="hover:text-gray-100"
                  href={"https://twitter.com/TicketSwap"}
                >
                  X
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fticketswap%2F"
                  }
                  className="hover:text-gray-100"
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.tiktok.com/notfound"}
                  className="hover:text-gray-100"
                >
                  Tiktok
                </Link>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className="font-bold pb-4 text-gray-100">Support</li>
                <li>Help & FAQs</li>
              </ul>
            </div>
            <div className="w-[35%]">
              <button className="howitworksbtn">How it works</button>
              <div className=" flex w-[100%] flex-wrap mt-5">
                <Link className="m-3 mx-1" href="https://apps.apple.com/app/apple-store/id932337449?pt=76205801&amp;ct=site_footer&amp;mt=8">
                  <picture>
                    <img
                      src="https://ticketswap-image-cdn.b-cdn.net/static/images/appStore/app-store-en.svg"
                      loading="lazy"
                      alt="App Store"
                      width="135"
                      height="40"
                    />
                  </picture>
                </Link>
                <div className="p-3 px-1">
                  <div className="flex">
                    <span className="">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                  </div>
                  <span className="styles_text__mfGe3 styles_small__lQPUZ">
                    4.7 - 9000+ reviews
                  </span>
                </div>
                <Link className="m-3 mx-1" href="https://play.google.com/store/apps/details?id=com.ticketswap.ticketswap&amp;referrer=utm_source%internal%26utm_medium%3Dapp_button%26utm_term%3Dsite_footer">
                  <picture>
                    <img
                      src="https://ticketswap-image-cdn.b-cdn.net/static/images/appStore/google-play-en.svg"
                      loading="lazy"
                      alt="Google Play"
                      width="135"
                      height="40"
                    />
                  </picture>
                </Link>
                <div className="p-3 px-1">
                  <div className="flex">
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                    <span className="styles_svgWrapper__Hq_LK">
                      <svg
                        aria-label="Star"
                        width="16"
                        height="16"
                        fill="#ffa602"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        strokeLinejoin="round"
                        strokeMiterlimit="1.414"
                        xmlns="http://www.w3.org/2000/svg"
                        role="presentation"
                        focusable="false"
                        viewBox="0 0 32 32"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <path d="M22.142 28c-.332 0-.666-.084-.972-.253L16 24.877l-5.17 2.869a1.987 1.987 0 0 1-2.122-.113 1.99 1.99 0 0 1-.823-1.958l1.013-6.234-4.33-4.457a1.991 1.991 0 0 1-.463-2.03A1.992 1.992 0 0 1 5.7 11.612l5.89-.904 2.597-5.555A1.984 1.984 0 0 1 16 4c.786 0 1.48.441 1.813 1.153l2.597 5.555 5.89.904a1.994 1.994 0 0 1 1.596 1.342 1.993 1.993 0 0 1-.463 2.03l-4.331 4.457 1.014 6.235a1.987 1.987 0 0 1-.824 1.957 1.991 1.991 0 0 1-1.15.367"></path>
                      </svg>
                    </span>
                  </div>
                  <span className="styles_text__mfGe3 styles_small__lQPUZ">
                    4.6 - 6000+ reviews
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[1px] bg-slate-400"></div>

      <div className="flex mx-44 my-14 justify-center">
        <div className="container">
          <div className="flex justify-between text-gray-400">
            <div className="flex gap-8 text-xm">
              <div>Conditions</div>
              <div>Privacy</div>
              <div>Responsible Disclosure</div>
            </div>
            <div>
              <label htmlFor="Language"> </label>

              <select
                className="bg-inherit font-medium"
                name="Language"
                id="Language"
              >
                <option value="Hindi">English</option>
                <option value="French">French</option>
                <option value="Italia">Italia</option>
                <option value="Dutch">Dutch</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
