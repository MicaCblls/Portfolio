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
  return (
    <Layout title={"Home"}>
      <HeroSection />
      <About />
      <Projects />
    </Layout>
  );
}
