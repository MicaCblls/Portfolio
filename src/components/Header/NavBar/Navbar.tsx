import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="w-full hidden md:flex justify-center">
        <div
          className="flex flex-row justify-center items-center top-0 w-2/4 h-16 outline-offset-4 py-4 px-5 fixed"
          style={{ fontSize: "clamp(1.2rem, -0.6571rem + 2.2857vw, 1.5rem)" }}
        >
          <Link href="#about" passHref>
            <span className="text-lightPink">About me</span>
          </Link>
          <span className="px-4 transition-colors delay-50 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text">
            ·
          </span>
          <Link href="#projects" passHref>
            <span className="text-pink">Projects</span>
          </Link>
          <span className="px-4 transition-colors delay-50 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text">
            ·
          </span>
          <Link href="#contact" passHref>
            <span className="text-darkPink">Contact me</span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
