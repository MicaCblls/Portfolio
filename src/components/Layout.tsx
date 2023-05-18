/* import Footer from "@components/Footer"; */
import { useRouter } from "next/router";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactNode } from "react";

import Navbar from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  title: string;
};

export default function Layout({ children, title }: LayoutProps) {
  let route = useRouter();
  let status = route.pathname !== "/" ? false : true;
  return (
    <>
      <Head>
        <title>Portfolio MicaCblls</title>
        <meta name="description" content="Portfolio de Micaela Ceballos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <main
          className=" dark:bg-darkNeutral  duration-300 ease-in-out bg-white
            w-full flex flex-1 flex-wrap justify-center items-center  mx-auto h-auto relative  font-Garamond"
        >
          <Navbar />
          {children}
          <ToastContainer />
          <Footer />
          {/*  {!status ? null : <Footer />} */}
        </main>
      </>
    </>
  );
}
