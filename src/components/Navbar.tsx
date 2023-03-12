import Link from "next/link";

const NavBar = () => {
  return (
    <>
      <nav className="bg-lightPink flex flex-row justify-evenly top-0 w-full h-16 border-b outline-offset-4 py-4 px-10">
        <div>Icono</div>
        <div className="flex flex-row justify-evenly w-1/4">
          <Link href={"/about"}>
            <span>About me</span>
          </Link>
          <Link href={"/projects"}>
            <span>Projects</span>
          </Link>
          <Link href={"/contact"}>
            <span>Contact me</span>
          </Link>
        </div>
        <div>Change language</div>
      </nav>
    </>
  );
};

export default NavBar;
