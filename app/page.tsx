import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";

export default function page() {
  return (
    <section>
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </section>
  );
}
