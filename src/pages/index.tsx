import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/ContactMe";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        <section id="about" className="flex flex-col pt-20 px-20 w-full ">
          <div className="w-full flex flex-row pt-20 justify-end items-end">
            <div className="md:z-10 max-h-fit max-w-min container">
              <h1
                className="transition-colors delay-300 bg-gradient-to-r from-lightPink to-darkPink text-transparent bg-clip-text animate-text"
                style={{
                  fontSize: "clamp(2rem, 1.6281rem + 1.9835vw, 3.5rem)",
                }}
              >
                Micaela Victoria Ceballos
              </h1>
              <h2
                className="transition-colors delay-300 bg-gradient-to-l from-lightPink to-darkPink text-transparent bg-clip-text animate-text"
                style={{ fontSize: "clamp(1rem, 0.7521rem + 1.3223vw, 2rem)" }}
              >
                Full Stack Developer
              </h2>
            </div>
            <Image
              src="/../public/animatedMeDark1.gif"
              alt="Animated Micaela"
              width={700}
              height={700}
              priority
              className="rounded hidden sm:block "
              style={{
                width: "clamp(18.75rem, 12.5517rem + 33.0579vw, 43.75rem)",
                objectFit: "scale-down",
              }}
            />
          </div>
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
