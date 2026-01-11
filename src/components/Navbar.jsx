import { useState } from "react";
import { navItems } from "../constants/index";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toogleMenuBtn() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="backdrop-blur-md sticky top-0 border-b border-neutral-600 ">
      <div className="container max-w-7xl mx-auto  py-3 flex px-4 justify-between items-center">
        {/* logo */}
        <a href="#" className="flex items-center ">
          <img src={logo} alt="virtuals" className="w-10 h-10" />
          <p className="text-xl font-semibold tracking-tight">VirtualS</p>
        </a>
        {/* menu links */}
        <ul className="hidden lg:flex items-center gap-12 ms-15">
          {navItems.map((navItems, index) => {
            return (
              <li key={index}>
                <a
                  className="text-[14px] font-medium text-white transition-all duration-200 hover:text-orange-400 "
                  href={navItems.href}
                >
                  {navItems.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* btn  */}
        <div className="hidden lg:flex items-center justify-between gap-10">
          <a
            href="#"
            className="border border-white text-white bg-transparent  px-3 py-2 rounded text-sm font-medium transition-all duration-200 hover:bg-orange-500 hover:border-orange-500  "
          >
            Sign Up
          </a>
          <a
            href="#"
            className="bg-linear-to-r from-orange-400 to-red-600 px-3 py-2 rounded font-medium text-sm"
          >
            Create an account
          </a>
        </div>

        {/* menu button */}
        <button
          className="block lg:hidden cursor-pointer "
          onClick={toogleMenuBtn}
        >
          {!isMenuOpen ? <Menu /> : <X />}
        </button>

        {/* mobile menu */}
        {isMenuOpen && (
          <div className=" fixed top-16 right-0 left-0 w-screen  py-6 lg:hidden flex flex-col items-center gap-7 justify-center text-center bg-neutral-900">
            <ul className="flex flex-col gap-4 ">
              {navItems.map((items, index) => {
                return (
                  <li key={index}>
                    <a
                      href={items.href}
                      className="text-[14px] font-medium text-white transition-all duration-200 hover:text-orange-400 "
                    >
                      {items.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="flex gap-4">
              <a
                href="#"
                className="border border-white text-white bg-transparent  px-3 py-2 rounded text-sm font-medium transition-all duration-400 hover:bg-orange-500 hover:border-orange-500  "
              >
                Sign Up
              </a>
              <a
                href="#"
                className="bg-linear-to-r from-orange-400 to-red-600 px-3 py-2 rounded font-medium text-sm"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
