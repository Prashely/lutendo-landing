import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-pattern mt-0 md:mt-5 xl:mt-1 min-h-screen flex items-center justify-center bg-[#160c6b] md:pt-10"
    >
      <div className="container mx-auto px-4 md:px-8 md:pt-10">
        <div className="flex flex-col items-start text-left md:items-center md:text-center w-full max-w-3xl mx-auto">
          <h1
            className="text-4xl md:text-center md:text-6xl lg:text-8xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="text-[#06db9a]">Empowering</span> Youth.{" "}
            <span className="text-[#06db9a]">Supporting</span> Businesses.{" "}
            <span className="text-[#06db9a]">Delivering</span> Packages.
          </h1>
          <p
            className="text-lg md:text-center md:text-xl mb-8 text-white"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Reliable courier services and in-demand skills training — proudly
            driven by Lutendo Business Supplies.
          </p>

          {/* 👇 Mobile Button Group (sm and below) */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-start sm:text-left space-y-2 sm:space-y-0 sm:space-x-4 md:hidden">
            <a
              href="#contact"
              className="bg-[#06db9a] hover:bg-[#06db9a]/80 text-[#160c6b] font-bold py-3 px-8 rounded-md transition-colors text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="hover:text-white font-bold py-0 transition-colors text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See Our Services
            </a>
          </div>

          {/* 👇 Desktop Button Group (md and up) */}
          <div className="hidden md:flex flex-col sm:flex-row sm:items-start sm:justify-start sm:text-left mx-auto gap-3 sm:self-start space-y-2 md:space-y-4">
            <a
              href="#contact"
              className="bg-[#06db9a] hover:bg-[#06db9a]/80 text-[#160c6b] font-bold py-3 px-8 rounded-md transition-colors text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="hover:text-white font-bold py-0 transition-colors text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
