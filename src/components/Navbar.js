import { Link } from "react-router-dom";
import { useState } from "react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-800 p-4 text-white font-semibold text-xl border-white">
      <div className="container mx-auto flex items-center justify-between">

        <div className="flex items-center gap-3">
          <img
            src="../1.png"
            alt="Profile"
            className="w-12 h-12 object-cover mr-2"
          />
          <h1 className="text-3xl md:text-3xl font-serif text-transparent bg-clip-text bg-white to-slate-300 hover:scale-105">
            CODE AURA
          </h1>
        </div>

        <div className="hidden md:flex flex-wrap gap-2">
          <Link to="/" className="relative inline-block px-6 py-2.5 text-lime-200 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">Home</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-lime-400/20 to-lime-400/40 shadow-inner shadow-lime-200/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-lime-200/30 via-lime-200/10 to-transparent group-hover:border-lime-400 pointer-events-none"></span>
          </Link>

          <Link to="/aboutme" className="relative inline-block px-6 py-2.5 text-lime-200 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">About Us</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-lime-400/20 to-lime-400/40 shadow-inner shadow-lime-200/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-lime-200/30 via-lime-200/10 to-transparent group-hover:border-lime-400 pointer-events-none"></span>
          </Link>

          <Link to="/skills" className="relative inline-block px-6 py-2.5 text-lime-200 font-medium rounded-3xl cursor-pointer group no-underline">
            <span className="relative z-10">Skills</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-lime-400/20 to-lime-400/40 shadow-inner shadow-lime-200/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-lime-200/30 via-lime-200/10 to-transparent group-hover:border-lime-400 pointer-events-none"></span>
          </Link>

          <Link to="/project" className="relative inline-block px-6 py-2.5 text-lime-200 font-medium rounded-3xl cursor-pointer group no-underline mr-28">
            <span className="relative z-10">Projects</span>
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-transparent via-lime-400/20 to-lime-400/40 shadow-inner shadow-lime-200/40 transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
            <span className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-b from-lime-200/30 via-lime-200/10 to-transparent group-hover:border-lime-400 pointer-events-none"></span>
          </Link>

          <Link
            to="/contect"
            className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-lime-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080] no-underline"
          >
            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
              <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
              <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-lime-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
                    <path
                      fill="currentColor"
                      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-white font-semibold">
              Contact
            </div>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-lime-400 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 p-4">
          <Link to="/" className="text-lime-200 py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/aboutme" className="text-lime-200 py-2" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/skills" className="text-lime-200 py-2" onClick={() => setIsOpen(false)}>Skills</Link>
          <Link to="/project" className="text-lime-200 py-2" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/contect" className="text-lime-200 py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
