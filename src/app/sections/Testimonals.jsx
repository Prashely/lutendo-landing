import React from "react";

const testimonials = [
  {
    initials: "PM",
    name: "Prashely M",
    rating: 5,
    text: "I’d been hitting the gym for months with barely any progress. I looked the same, felt lost, and honestly started thinking maybe my body just wasn’t built for muscle. Nash helped me fix my training split, taught me about recovery and proper nutrition. Within 8 weeks, I finally looked like I lift. Shoulders popping, chest growing—everything changed.",
  },
  {
    initials: "TM",
    name: "Tebogo M",
    rating: 5,
    text: "I wasn’t fat, but I wasn’t fit either. Just soft, skinny fat—zero definition. Nash didn’t just throw me into a HIIT class. He taught me how to lift, structure my meals, and build a strong base. Now I’m leaner, stronger, and for the first time in my life, I actually feel proud of my body.",
  },
  {
    initials: "RK",
    name: "Reneilwe K",
    rating: 5,
    text: "I’ve tried every diet: starving, shakes, cutting carbs—nothing stuck. I hated how I looked in pictures and avoided mirrors. Nash didn’t put me on a crash diet. He showed me how to eat better without guilt, gave me workouts I actually enjoyed, and held me accountable. I’ve lost 18kg and still get to enjoy pap and steak. It’s the first time I feel like I’m winning for real.",
  },
];

const StarRating = ({ rating }) => (
  <div className="text-[#06db9a] flex gap-1">
    {Array.from({ length: rating }, (_, i) => (
      <span key={i}>★</span>
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
        Client <span className="text-[#06db9a]">Success Stories</span>
      </h2>
      <p className="text-[#160c6b] mb-12 max-w-2xl mx-auto">
        Hear from our clients who have transformed their lives through our
        training and nutrition programs.
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
