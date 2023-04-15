import NavBar from "./NavBar/Navbar";
import ResponsiveNavBar from "./NavBar/ResponsiveNavBar";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-start  px-7 w-full">
      <NavBar />
      <ResponsiveNavBar />
    </header>
  );
}
