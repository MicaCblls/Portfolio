import NavBar from "./NavBar/Navbar";
import ResponsiveNavBar from "./NavBar/ResponsiveNavBar";

export default function Header() {
  return (
    <header className="flex items-center justify-start py-5 px-7 w-full">
      <NavBar />
      <ResponsiveNavBar />
    </header>
  );
}
