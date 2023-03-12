import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/Navbar";
import Contact from "./contact";
import About from "./about";
import Projects from "./projects";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Micaela Ceballos</title>
        <meta name="description" content="Portfolio de Micaela Ceballos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral flex flex-col w-full h-full">
        <NavBar />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
