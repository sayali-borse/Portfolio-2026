import React from "react";
import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Project from "@/sections/Project";
import Testimonial from "@/sections/Testimonial";
import Contact from "@/sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        {/* <About />
        <Experience />
        <Project />
        <Testimonial />
        <Contact /> */}
      </main>
    </div>
  );
};

export default App;
