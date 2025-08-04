import React from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    initials: "KM",
    name: "Khensani M",
    rating: 5,
    text: "We needed bulk office supplies on short notice. Lutendo not only delivered everything the next day — but their pricing was better than the usual guys. Definitely our go-to now.",
  },
  {
    initials: "LS",
    name: "Lebo S",
    rating: 5,
    text: "I run a small printing shop and was struggling to find reliable delivery for client orders. Lutendo’s courier service is fast, professional, and they actually care about your packages.",
  },
  {
    initials: "TM",
    name: "Thabo M",
    rating: 5,
    text: "I joined the training programme not expecting much, but I ended up gaining real workplace skills. They helped me with CV writing, computer basics, and I got a job two months later.",
  },
];

const StarRating = ({ rating }) => (
  <div className="text-[#06db9a] flex gap-1">
    {Array.from({ length: rating }, (_, i) => (
      <FaStar key={i} />
    ))}
  </div>
);

const TestimonialCard = ({ initials, name, rating, text }) => (
  <div className="bg-[#160c6b] text-white rounded-lg p-6 py-10 w-full max-w-md shadow-md">
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-[#06db9a] text-white font-bold w-10 h-10 flex items-center justify-center rounded-full text-lg">
        {initials}
      </div>
      <div>
        <p className="font-semibold">{name}</p>
        <StarRating rating={rating} />
      </div>
    </div>
    <p className="text-sm text-white text-start">{text}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-4 text-center" id="testimonials">
      <h2 className="text-3xl md:text-4xl font-bold text-[#160c6b] mb-8">
        What Our <span className="text-[#06db9a]">Clients Say</span>
      </h2>
      <p className="text-[#160c6b] mb-12 max-w-2xl mx-auto">
        Businesses, professionals, and everyday South Africans trust Lutendo for
        fast delivery, quality supplies, and practical training that makes a
        difference.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-12">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
