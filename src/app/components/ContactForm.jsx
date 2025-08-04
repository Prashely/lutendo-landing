"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullMessage = `Hello,\n\nMy name is ${name},\n\n${
      message || "I’d like to get more information about your supplies."
    }\n\nyou can also reach me here ${phone}`;
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/27737054710?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="floating-form bg-[#06db9a] text-white w-full md:w-[500px] rounded-xl border p-8 border-b-4 border-[#160c6b]"
    >
      <InputField
        label="Name"
        type="text"
        placeholder="Martha Mulaudzi"
        value={name}
        onChange={setName}
      />
      <InputField
        label="Phone Number"
        type="tel"
        placeholder="073 705 4710"
        value={phone}
        onChange={setPhone}
      />

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1 tracking-wide">
          I would like to get more information about your supplies.
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="I'm struggling to lose weight and need some guidance."
          className="w-full bg-white text-[#160c6b] border border-[#160c6b] rounded-lg px-4 py-3 shadow-sm placeholder-white transition focus:outline-none focus:border-[#160c6b] focus:ring-2 focus:ring-[#160c6b] focus:shadow-[#160c6b]/40 tracking-wide"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full md:w-fit bg-[#160c6b] hover:bg-[#160c6b]/80 text-[#06db9a] font-semibold px-6 py-3 rounded-lg transition duration-300 shadow-md hover:shadow-[#160c6b]/40 tracking-wider"
      >
        Send Message
      </button>
    </form>
  );
}

function InputField({ label, type, placeholder, value, onChange }) {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium mb-1 tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white  text-[#160c6b] border border-[#160c6b]  rounded-lg px-4 py-3 shadow-sm placeholder-gray-500 transition focus:outline-none focus:border-[#06db9a] focus:ring-2 focus:ring-[#06db9a] focus:shadow-[#06db9a] tracking-wider"
      />
    </div>
  );
}
