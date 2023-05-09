import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/ContactMe";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";


export default function Home() {
//   const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  
//   useEffect(() => {
//     function handleResize() {
//       setViewportSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }
    
//     handleResize();
    
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);
  
// const titleRef = useRef(null);

//   useEffect(() => {
//     let startY = viewportSize.width > 768 ? "-10%" : "-40%";
//     let startX = viewportSize.width > 768 ? "-50%" : "30%";
//     let endX = viewportSize.width > 768 ? "25%" : "-0%";
//     gsap.fromTo(
//       titleRef.current,
//       { x: startX, y: startY },
//       {
//         duration: 2.5,
//         x: endX,
//         y: startY,
//         ease: "power2.out",
//         stagger: {
//           amount: 0.3,
//           from: "start",
//         },
//       }
//     );
//   }, [viewportSize.width]);

  return (
    <Layout title={"Home"}>
      {/* <section className=" max-h-fit w-full flex flex-col md:flex-row-reverse justify-center items-center md:items-end px-2 md:px-10"
      style={{paddingTop:"clamp(4.375rem, 3.4762rem + 4.7934vw, 8rem)"}}>
        
        <Image
          src="/MicaelaCeballos.jpg"
          alt="Micaela"
          width={200}
          height={200}
          quality={100}
          priority
          className="rounded-full flex justify-center md:justify-end"
          style={{
            // width: "clamp(18.75rem, 12.5517rem + 33.0579vw, 43.75rem)",
            objectFit: "cover",
          }}
        />
        <section
        className=" flex flex-col max-w-fit backdrop-blur-lg px-2 md:whitespace-nowrap"
        style={{
          height: "clamp(5rem, 4.1322rem + 4.6281vw, 8.5rem)",
        }}
        >
        <h1
        ref={titleRef}
            className="text-darkPink font-bold"
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
      </section> */}
    <HeroSection/>
        <About />
  
        <Projects />
   
    </Layout>
  );
}
