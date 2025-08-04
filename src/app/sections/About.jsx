"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      className=" w-full px-10 py-20 bg-[#06db9a] text-[#160c6b]"
      id="about"
    >
      <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-center gap-16 md:px-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/nash2.png"
            alt="Lutendo Business Visual"
            width={560}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-3xl md:w-1/2 md:pl-10">
          <h2 className="text-4xl font-bold mb-4">
            About{" "}
            <span className="text-white text-3xl md:text-4xl font-bold mb-6">
              Lutendo
            </span>
          </h2>
          <p className="text-[#160c6b] mb-4">
            Founded in 2025 by visionary entrepreneur Martha Mulaudzi, Lutendo
            Business Supplies began as a small operation in Johannesburg with
            one mission: to deliver real value to real people.
          </p>
          <p className="text-[#160c6b] mb-4">
            Today, Lutendo has grown into a trusted partner for organizations,
            schools, clinics, and small businesses across Gauteng. Whether it’s
            courier services, essential supplies, or practical training — we
            believe in building a better future, one delivery at a time.
          </p>
          <p className="text-[#160c6b] mb-6">
            Our team works hard, moves fast, and puts people first. That’s how
            we’ve earned the trust of over 300 clients in under a year — and
            we’re just getting started.
          </p>
          <div className="flex gap-10 mb-6">
            <div>
              <h3 className="text-3xl font-bold text-white">300+</h3>
              <p className="text-sm">Clients Served</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">50+</h3>
              <p className="text-sm">Businesses Equipped</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">7</h3>
              <p className="text-sm">Team Members</p>
            </div>
          </div>
          <Link
            href="#contact"
            className="text-center text-lg w-[250px] bg-[#160c6b] text-white hover:bg-[#160c6b]/80 inline-block px-8 py-3 rounded-md font-semibold transition-all duration-200"
          >
            Start Today
          </Link>
        </div>
      </div>
    </section>
  );
}
