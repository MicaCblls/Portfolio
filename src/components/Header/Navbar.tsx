"use client"; // this is a client component
import React, { MouseEvent } from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);
  const handleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.currentTarget.value === "light") {
      setTheme(e.currentTarget.value);
    } else {
      setTheme(e.currentTarget.value);
    }
  };

  return (
    <header className="w-full flex items-center flex-1 h-16 mx-auto  px-4 sm:px-20 fixed top-0 z-50 shadow bg-white ease-in-out duration-300 dark:bg-stone-900 dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center flex w-full">
        <div className=" md:hidden flex items-center justify-between py-3 md:py-5 ">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <div
          className={`flex-1 justify-center pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${
            navbar ? "flex" : "hidden"
          }`}
        >
          <div
            className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0"
            style={{ fontSize: "clamp(1rem, 0.876rem + 0.6612vw, 1.5rem)" }}
          >
            <Link href="#about">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text">
                About me
              </span>
            </Link>

            <Link href="#projects">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text">
                Projects
              </span>
            </Link>

            <Link href="#contact">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text">
                Contact me
              </span>
            </Link>
          </div>
        </div>
        <div className="flex self-center">
          {currentTheme === "dark" ? (
            <button
              onClick={handleTheme}
              className="bg-slate-100 p-2 rounded-xl"
              value="light"
            >
              <RiSunLine size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={handleTheme}
              className="bg-slate-100 p-2 rounded-xl"
              value="dark"
            >
              <RiMoonFill size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
