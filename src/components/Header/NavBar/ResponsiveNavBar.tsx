import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const ResponsiveNavBar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <nav className="md:hidden flex justify-start items-center py-4">
      <button aria-label="menu">
        <AiOutlineMenu
          className="text-gray-200 transition-colors duration-75 hover:text-darkPink"
          size={34}
          onClick={() => (hidden ? setHidden(false) : setHidden(true))}
        />
      </button>
      <div
        hidden={hidden}
        className="absolute top-[8vh] z-[1] w-3/4 h-auto py-8 md:flex md:visible md:flex-row text-xl bg-neutral700/90"
      >
        <div className="flex flex-col justify-between items-center w-full">
          <Link href="#about" passHref className="pb-4">
            <span className="text-lightPink">About me</span>
          </Link>
          <Link href="#projects" passHref className="pb-4">
            <span className="text-pink">Projects</span>
          </Link>
          <Link href="#contact" passHref className="pb-4">
            <span className="text-darkPink">Contact me</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavBar;
