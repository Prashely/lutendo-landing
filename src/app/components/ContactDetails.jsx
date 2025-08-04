import React from "react";
import { FaPhoneAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
// Fix: The WhatsApp icon import from "react-icons/fa6" is likely wrong, should be from "react-icons/fa" or "react-icons/si"
import { FaWhatsapp } from "react-icons/fa"; // changed from fa6 to fa

export default function ContactDetails() {
  return (
    <div className="text-white">
      <h2 className="text-3xl md:text-4xl font-bold mb-1 tracking-wide">
        Ready For Transformation?
      </h2>
      <p className="mb-10 text-gray-400 tracking-wide">
        Reach out and we will do our best to assist you.
      </p>

      <div className="space-y-8 text-sm text-gray-200 tracking-wider">
        <ContactItem
          icon={<FaPhoneAlt className="text-[#06db9a] text-3xl md:text-5xl" />}
          label="Telephone"
          value="075 313 6938"
        />
        <ContactItem
          icon={<FaWhatsapp className="text-[#06db9a] text-3xl md:text-5xl" />}
          label="WhatsApp"
          value={
            <a
              href="https://wa.me/27625768297"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              062 576 8297
            </a>
          }
        />
        <ContactItem
          icon={<FaFacebookF className="text-[#06db9a] text-3xl md:text-5xl" />}
          label="Facebook"
          value={
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Nash Fitness
            </a>
          }
        />
        <ContactItem
          icon={<FaInstagram className="text-[#06db9a] text-3xl md:text-5xl" />}
          label="Instagram"
          value={
            <a
              href="https://www.instagram.com/nashfitness/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @_nashfitness_
            </a>
          }
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 md:gap-6">
      <div className="mt-2">{icon}</div>
      <div>
        <p className="font-semibold text-white tracking-wider text-lg">
          {label}
        </p>
        <p className="font-light">{value}</p>
      </div>
    </div>
  );
}
