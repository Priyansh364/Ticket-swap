import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <div
        className={` relative  z-1 flex justify-between text-white p-6 px-8 items-center`}
      >
        <div className="flex items-center gap-4">
          <div className="font-bold">
            <Link href="/">
              <Image
                className={`invert`}
                src="/logo.svg"
                alt="No Logo"
                width={220}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex aaabb font-bold items-center gap-9">
          <Link href="https://jobs.ticketswap.com/">Jobs</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="https://partners.ticketswap.com/">Become a partner</Link>
          <Link href="/Login-Page">Log in</Link>
          <button className=" navbtn">Sell Tickets</button>
        </div>
      </div>



      
    </div>
  )
}

export default Navbar




