"use client";

import React from "react";
import ContactDetails from "../components/ContactDetails";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="hero-pattern bg-[#160c6b]  py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
        Get <span className="text-[#06db9a]">In Touch</span>
      </h2>
      <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-center">
        Every transformation starts with a decision. Make yours today. And join
        the Nash family.
      </p>
      <div className="flex mt-20  mx-auto max-w-[800px]">
        <ContactForm />
      </div>
    </section>
  );
}
