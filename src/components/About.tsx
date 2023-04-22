import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const About = () => {
  const divRef = useRef(null);

  useEffect(() => {
    const div = divRef.current;

    gsap.fromTo(
      div,
      { opacity: 0, y: "50%" },
      {
        opacity: 1,
        y: "0%",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: div,
          start: "bottom 80%",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="flex justify-center items-center py-10 px-6 md:px-10 relative">
        <div
          ref={divRef}
          className=" z-10 w-1/2 h-auto"
          style={{ opacity: 0, transform: "translateY(50%)" }}
        >
          <p
            className="text-ellipsis"
            style={{ fontSize: "clamp(1rem, -5.1905rem + 7.619vw, 2rem)" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
            est auctor, viverra odio eu, laoreet nulla. Cras dignissim rutrum
            arcu, mollis molestie purus porta nec. Praesent mollis felis vitae
            enim scelerisque, vitae hendrerit ligula ultrices. Phasellus
            vulputate ex id felis ornare sodales. Phasellus vulputate, neque
            congue aliquet lacinia, quam justo elementum neque, vitae volutpat
            turpis turpis a ligula. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
