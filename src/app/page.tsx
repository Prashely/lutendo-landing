"use client";
import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Testimonials from "./sections/Testimonals";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="mx-auto overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
