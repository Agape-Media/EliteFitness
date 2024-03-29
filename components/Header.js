import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Hamburger from "./Icons/Hamburger";
import Times from "./Icons/Times";

const navItems = [
  {
    label: "Home",
    path: "/",
    id: 0,
  },
  {
    label: "About Us",
    path: "/about",
    id: 1,
  },
  {
    label: "Contact Us",
    path: "/contact",
    id: 2,
  },
  {
    label: "Member Portal",
    path: "https://lift.clubautomation.com/",
    id: 3,
  },
  {
    label: "Join Now",
    path: "/join",
    id: 4,
  },
];

export default function Header() {
  const router = useRouter();
  const [open, setNav] = useState(false);

  return (
    <>
      <nav className="bg-white sm:bg-gray-300">
        <div className="relative flex items-center justify-between h-16 px-4 ">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={() => setNav(!open)}
              type="button"
              className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none transition duration-300 ease-in-out"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {!open ? <Hamburger /> : <Times />}
            </button>
          </div>
          <Link href="/">
            <img
              className="h-8 md:h-10 w-auto cursor-pointer"
              src="/eliteFitnessLogo.png"
              alt="Elite Fitness Logo"
            />
          </Link>
          <div className="flex items-center justify-center">
            <div className="hidden sm:block ">
              <div className="flex items-center space-x-4 md:space-x-8">
                {navItems.map((item, i) => (
                  <Link href={item.path} key={i}>
                    <a
                      className={`py-2 mt-2 border-b-2 md:mt-0 focus:outline-none focus:shadow-outline cursor-pointer hover:border-red-700  hover:text-gray-800 ${
                        router.pathname === item.path
                          ? "border-red-700"
                          : "border-transparent"
                      } ${
                        item.id == "4"
                          ? "text-red-700 font-extrabold text-lg"
                          : "text-base font-semibold text-gray-800"
                      } `}
                    >
                      {item.label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blank */}
          <div className="hidden md:flex w-24 items-center"></div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        {open && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, i) => (
                <Link href={item.path} key={i}>
                  <a
                    className={`text-gray-800 hover:bg-gray-800 hover:text-white px-3 py-2 text-base border-l-4 font-medium block ${
                      router.pathname === item.path
                        ? "border-red-700"
                        : "border-transparent"
                    }`}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
