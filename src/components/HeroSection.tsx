"use client"; // this is a client component
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";
import gsap from "gsap";

const HeroSection = () => {
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    function handleResize() {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const titleRef = useRef(null);

  useEffect(() => {
    let startY = viewportSize.width > 768 ? "-10%" : "-10%";
    let startX = viewportSize.width > 768 ? "-15%" : "30%";
    let endX = viewportSize.width > 768 ? "0%" : "-0%";
    gsap.fromTo(
      titleRef.current,
      { x: startX, y: startY },
      {
        duration: 2.5,
        x: endX,
        y: startY,
        ease: "power2.out",
        stagger: {
          amount: 0.3,
          from: "start",
        },
      }
    );
  }, [viewportSize.width]);
  return (
    <section
      id="home"
      className="flex flex-col w-full h-auto justify-start items-center  ease-in-out duration-300 dark:border-b dark:border-stone-600 bg-white dark:bg-darkNeutral px-4 md:px-14 pb-4"
    >
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-2 md:text-left">
        <div className="md:mt-2 md:w-1/2 flex justify-center">
          <Image
            src="/MicaelaCeballos.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1
            ref={titleRef}
            style={{
              fontSize: "clamp(2rem, 1.6281rem + 1.9835vw, 3.5rem)",
            }}
            className="text-darkPink text-4xl font-bold mt-6 md:mt-0 md:text-7xl"
          >
            Hi, I&#39;m Micaela V. Ceballos!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-pink">
              Full Dtack Developer{" "}
            </span>
            based in Buenos Aires, Argentina. Working towards creating software
            that makes life easier and more meaningful.
          </p>
          <Link
            href="https://drive.google.com/file/d/10S9uVD9wpE5gTKiP0AXfZV7uUhDj2It5/view?usp=sharing"
            target="_blank"
            className="text-neutral-100 font-semibold px-6 py-3 bg-lightPink rounded shadow hover:bg-pink"
          >
            Resume
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link href="/#about">
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
