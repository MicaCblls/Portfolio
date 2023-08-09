import React, { MouseEvent, useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { RiMoonFill, RiSunLine } from "react-icons/ri";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    setTheme("light");
  }, []);

  const handleTheme = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (e.currentTarget.value === "light") {
      setTheme(e.currentTarget.value);
    } else {
      setTheme(e.currentTarget.value);
    }
  };

  return (
    <header className="w-full flex items-center justify-center h-16 mx-auto  px-4 sm:px-10 fixed top-0 z-50 shadow bg-white ease-in-out duration-300 dark:bg-darkNeutral dark:border-b dark:border-stone-600 ">
      <div className="justify-between md:items-center flex w-full">
        <div className=" md:hidden flex items-center justify-between py-3 md:py-5 ">
          <button
            className="p-2 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
          </button>
        </div>

        <div
          className={`w-full flex-1 justify-center items-center md:items-start pb-3 md:flex md:pb-0 md:mt-0 ${
            navbar
              ? "flex absolute top-0 right-0 h-[50vh] -z-10 bg-neutral700"
              : "hidden"
          }`}
        >
          <div
            className="text-2xl flex-col items-center justify-center py-6 space-y-10 flex md:space-x-6 md:flex-row md:space-y-0"
            style={{ fontSize: "clamp(1.2rem, 1.1256rem + 0.3967vw, 1.5rem)" }}
          >
            <Link onClick={() => setNavbar(false)} href="#about">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text text-2xl">
                About me
              </span>
            </Link>

            <Link onClick={() => setNavbar(false)} href="#projects">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text text-2xl">
                Projects
              </span>
            </Link>

            <Link onClick={() => setNavbar(false)} href="#contact">
              <span className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text text-2xl">
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
              <RiSunLine key={"sun-icon"} size={25} color="black" />
            </button>
          ) : (
            <button
              onClick={handleTheme}
              className="bg-slate-100 p-2 rounded-xl"
              value="dark"
            >
              <RiMoonFill key={"moon-icon"} size={25} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
