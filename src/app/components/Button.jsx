// components/ui/Button.jsx
import React from "react";
import Link from "next/link";

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700",
    secondary:
      "border border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
