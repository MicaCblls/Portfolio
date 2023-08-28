import Link from "next/link";
import React from "react";
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="mx-auto w-full px-4 sm:px-6 flex flex-col h-auto justify-start items-center  ease-in-out duration-300 dark:border-b dark:border-stone-600  bg-white dark:bg-darkNeutral"
    >
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="w-full p-4 flex flex-col text-center text-neutral-900 md:flex-row justify-between">
        <div className="flex flex-row items-center justify-around space-x-2 text-darkNeutral dark:text-white ">
          © 2023 Micaela Ceballos
          <Link href="/" className="hover:underline"></Link>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1">
          <Link
            href="https://github.com/MicaCblls"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-darkNeutral dark:text-white"
              size={30}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/micaela-ceballos-036b4a21b/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-darkNeutral dark:text-white"
              size={30}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
