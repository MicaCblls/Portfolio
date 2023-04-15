import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/ContactMe";
import Header from "@/components/Header";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { x: "0%", y: "-25%" },
      {
        duration: 2.5,
        x: "45%",
        y: "-25%",
        ease: "power2.out",
        stagger: {
          amount: 0.3,
          from: "start",
        },
      }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio MicaCblls</title>
        <meta name="description" content="Portfolio de Micaela Ceballos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-darkNeutral flex flex-col w-full h-full font-Garamond">
        <Header />
        <section className="md:z-10 max-h-fit w-full flex flex-row justify-center items-end py-10 px-2 md:px-20">
          <section
            ref={titleRef}
            className="flex flex-col max-w-fit backdrop-blur-lg px-2 whitespace-nowrap"
            style={{
              height: "clamp(5rem, 4.1322rem + 4.6281vw, 8.5rem)",
            }}
          >
            <h1
              className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text"
              style={{
                fontSize: "clamp(2rem, 1.6281rem + 1.9835vw, 3.5rem)",
              }}
            >
              Micaela V. Ceballos
            </h1>
            <h2
              className="transition-colors delay-300 bg-gradient-to-l from-lightPink to-darkPink text-transparent bg-clip-text animate-text"
              style={{ fontSize: "clamp(1rem, 0.6281rem + 1.9835vw, 2.5rem)" }}
            >
              Full Stack Developer
            </h2>
          </section>
          <Image
            src="/../public/animatedMeDark1.gif"
            alt="Animated Micaela"
            width={900}
            height={900}
            priority
            className="rounded hidden sm:block justify-end"
            style={{
              width: "clamp(18.75rem, 12.5517rem + 33.0579vw, 43.75rem)",
              objectFit: "scale-down",
            }}
          />
        </section>
        <section
          id="about"
          className="flex flex-col w-full h-full justify-center items-center"
        >
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
