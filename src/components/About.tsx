import React, { useRef, useEffect } from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "NodeJS" },
  { skill: "Express.js" },
  { skill: "Sequelize" },
  { skill: "PostgreSQL" },
  { skill: "Git" },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col w-full h-auto justify-start items-center  ease-in-out duration-300 dark:border-b dark:border-stone-600 bg-white dark:bg-darkNeutral px-4 md:px-14"
    >
      <div className="my-12 pb-12 pt-12 md:py-32">
        <h2 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-darkPink border-0 rounded"></hr>
        </h2>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-lg">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Micaela and I am a{" "}
              <span className="font-bold">{"curious"}</span>,
              <span className="font-bold">{" proactive"}</span>, and
              <span className="font-bold">{" adaptable"}</span> Full Stack
              Developer based in Buenos Aires, Argentina.
            </p>
            <br />
            <p>
              I graduated from Henry Bootcamp in 2022 with a certificate in Full
              Stack Developer and have been working in the field ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, excercising, to studying English, I am always
              seeking new experiences and love to keep myself engaged and
              learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-pink">never stop growing</span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/animatedme.jpg"
              alt=""
              width={300}
              height={300}
              className="hidden md:block md:relative md:left-24 md:z-0 py-4 rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
