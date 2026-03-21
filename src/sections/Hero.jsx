import React from "react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { ArrowRight, ArrowRightCircle, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      {/*    Bg- Background Image */}

      <div className="absolute inset-0">
        <img
          src="./public/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/*  green dot */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(70)].map((_, i) => (
          <div
            className="absolute w-0.75 h-0.75 rounded-full opacity-60"
            style={{
              backgroundColor: "#20b2a6",
              // backgroundColor: "#ff4d6d",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${30 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* ---- content of Hero section---- */}
      <div className="container mx-auto px-8 pt-32 pb-20 relative z-10 animation-delay-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ---left section  */}

          <div className="space-y-8">
            <div className="animate-fade-in   animation-delay-100">
              <span className="inline-flex items-center gap-2 px-2 py-4 rounded-full glass text-xl text-primary animate-pulse">
                <span className=" w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack Developer | React-Specialist
              </span>
            </div>
            {/* ---- Headline for Hero section */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in animation-delay-300">
                Crafting{" "}
                <span className="text-primary glow-text "> Digital </span>
                <br />
                Experience with
                <span className="text-white fort-serif italic font-normal">
                  {" "}
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mx-w-lg animate-fade-in animation-delay-1200">
                {" "}
                Hi, I'm{" "}
                <span className="text-white animate-pulse"> Sayali Borse </span>
                - Full-Stack Developer Specialist in React, Next.js Typescript,
                I build scalable , Perfomant web applications that user love.
              </p>
            </div>
            {/* ----- button section---  */}
            <div>
              <Button size="default">
                {" "}
                Contact Me <ArrowRight className="h-5 w-5" />{" "}
              </Button>
              {/* ------ Animated Border button  */}
              <AnimatedBorderButton />
            </div>
          </div>
          {/* --- right section  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
