import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Countries App",
    description:
      "App about countries that includes country searches by name, filtering by tourist activity or continent, alphabetical ordering and creation of tourist activities with the possibility of relating them to different countries.",
    image: "/countriesApp.jpg",
    github: "https://github.com/MicaCblls/PI-Countries",
    link: "https://pi-countries-gold.vercel.app/",
  },
  {
    name: "Enlazar Consultant",
    description:
      "Together with four volunteers, we developed from scratch a new website for Consultora Enlazar, our goal was to optimize the functionalities, such as sending and storing queries, and managing the content of the site through Sanity CMS, we added the possibility of login and renewed the views of the sections.",
    image: "/enlazar.jpg",
    github: "https://github.com/ConsultoraEnlazar1/EnlazarWeb",
    link: "https://consultoraenlazar.xyz",
  },
  {
    name: "Angular App",
    description:
      "Angular project that displays a list of products where users can add them to a shopping cart, fill out a checkout form, and click the Checkout button, which stores the order on a Supabase backend and modifies the stock of the ordered products .",
    image: "/angularapp.jpg",
    github: "https://github.com/MicaCblls/angularapp-1",
    link: "https://angularapp-1.vercel.app",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col w-full h-auto justify-start items-center  ease-in-out duration-300 dark:border-b dark:border-stone-600 bg-white dark:bg-darkNeutral px-4 md:px-14 py-4"
    >
      <h1 className="my-10 text-center font-bold text-4xl py-12 md:py-16">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-darkPink border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12 items-center">
                  <div className=" md:w-1/2">
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
