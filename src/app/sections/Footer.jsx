"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-[#06db9a] text-[#160c6b] px-6 py-10" id="footer">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white pb-6">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Lutendo Business Supplies Logo"
              width={25}
              height={20}
              className="w-32 0 object-cover"
            />
          </Link>
          <p className="text-[#160c6b] font-bold">
            Empowering Youth, Supplying Businesses, Delivering Packages.
          </p>
        </div>
        <div className="flex space-x-4 text-[#160c6b] text-xl">
          <a
            href="https://wa.me/27737074710"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.tiktok.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="hover:text-white cursor-pointer" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="hover:text-white cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center text-[#160c6b] mt-4 text-sm">
        <p>
          © 2025 Nashfitness. All rights reserved. by{" "}
          <a
            href="https://precisiondesignsagency.com"
            target="_blank"
            className="text-white hover:text-red-600 transition-colors"
          >
            Precision Designs
          </a>
        </p>
        {/* <div className="mt-2 md:mt-0">
          <Link href="/terms-and-conditions">T&Cs</Link>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
