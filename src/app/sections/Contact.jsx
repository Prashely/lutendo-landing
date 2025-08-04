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
        Whether you have questions about our services, want to learn more about
        our training programs, or need assistance with deliveries, we’re here to
        help. Reach out to us via WhatsApp or fill out the form below.
      </p>
      <div className="flex mt-20  mx-auto max-w-[800px]">
        <ContactForm />
      </div>
    </section>
  );
}
