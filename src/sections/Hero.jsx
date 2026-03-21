import React from "react";

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
      <div>
        <div>
          {/* ---left section  */}

          <div>
            <div className="animate-fade-in">
              <span className=" w-2 h-2 bg-primary rounded-full">
                {" "}
                Full-Stack Developer | React-Specialist
              </span>
            </div>
          </div>
          {/* --- right section  */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
