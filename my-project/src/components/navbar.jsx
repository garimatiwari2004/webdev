import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X, MoveUpRight, User2 } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <div className="hidden md:flex justify-between items-center px-4 py-3 font-sora">
        <div className="px-0 md:px-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        <div className="flex items-center gap-5 pr-4">
          <div className="flex cursor-pointer hover:text-blue-800 items-center gap-1">
            <User2 size={18} />
            <span>Become an Interviewer</span>
            <MoveUpRight size={16} />
          </div>

          <a href="/" className="hover:underline hover:text-blue-800">
            Features
          </a>
          <a href="#" className="hover:underline hover:text-blue-800">
            Pricing
          </a>
          <a href="#" className="hover:underline hover:text-blue-800">
            Start a trial
          </a>

          <button className="border border-black px-3 py-1 hover:bg-black hover:text-white">
            Login
          </button>
          <button className="bg-black text-white px-3 py-1 border border-black hover:bg-white hover:text-black">
            Signup
          </button>
        </div>
      </div>

     
      <div className="flex md:hidden justify-between items-center px-4 py-3 font-sora relative z-50">
        <div className="px-4">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

      
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none z-50"
        >
          {open ? <X size={28} className="text-white" /> : <Menu size={28} />}
        </button>

       
        <div
          className={`font-sora fixed top-0 right-0 h-full w-2/3 bg-gray-900 text-white flex flex-col items-center justify-center space-y-8 text-lg font-medium transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <a
            href="#"
            className="hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Become an Interiewer
          </a>
          <a
            href="#"
            className="hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#"
            className="hover:text-blue-400"
            onClick={() => setOpen(false)}
          >
            Start a trial
          </a>

          <div className="flex flex-col gap-3">
            <button className="border border-white px-4 py-2 hover:bg-white hover:text-black transition">
              Login
            </button>
            <button className="bg-white text-black px-4 py-2 border border-white hover:bg-transparent hover:text-white transition">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
