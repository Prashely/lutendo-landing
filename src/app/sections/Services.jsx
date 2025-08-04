import React from "react";
import {
  FaTruck,
  FaBoxOpen,
  FaChalkboardTeacher,
  FaCheck,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaTruck className="text-[#06db9a] text-4xl mb-2" />,
      title: "Courier & Delivery",
      para: "We help you send things fast, safe, and on time. Without excuses.",
      points: [
        "Local and regional delivery",
        "Office pickups",
        "Secure transport",
      ],
    },
    {
      icon: <FaBoxOpen className="text-[#06db9a] text-4xl mb-2" />,
      title: "Office & Business Supplies",
      para: "We bring all the tools, stationery & equipment your office or store needs.",
      points: [
        "Cleaning and safety gear",
        "Furniture and stationery",
        "Medical and building items",
      ],
    },
    {
      icon: <FaChalkboardTeacher className="text-[#06db9a] text-4xl mb-2" />,
      title: "Skills Training",
      para: "We teach real in-demand skills to help young people get jobs.",
      points: [
        "Short, easy-to-learn courses",
        "Job-ready training",
        "Simple, hands-on learning",
      ],
    },
  ];

  return (
    <section
      className="px-10 py-20 bg-white text-center text-[#160c6b]"
      id="services"
    >
      <h2 className="text-4xl font-bold mb-4">
        Our <span className="text-[#06db9a]">Services</span>
      </h2>
      <p className="text-[#160c6b] max-w-2xl mx-auto mb-10">
        We help businesses grow and people move forward — fast, easy, and always
        reliable.
      </p>
      <div className="mx-auto max-w-[1440px] grid md:grid-cols-3 gap-8 text-[#06db9a]">
        {services.map((service, i) => (
          <div
            key={i}
            className="service-card bg-[#160c6b] rounded-lg p-8 border-b-4 border-[#06db9a] text-left transition-all duration-300"
          >
            <div className="text-[#06db9a] text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl text-white font-bold mb-3">
              {service.title}
            </h3>
            <p className="text-white mb-4">{service.para}</p>
            <ul className="text-white space-y-2 mb-6">
              {service.points.map((point, j) => (
                <li key={j} className="flex items-center">
                  <FaCheck className="text-[#06db9a] mr-2" />
                  {point}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="text-[#06db9a] inline-block font-semibold hover:underline"
            >
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
