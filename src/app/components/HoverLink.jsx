// components/ui/HoverLink.jsx
import Link from "next/link";

export default function HoverLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-sm text-gray-300 hover:text-red-500 transition duration-200 ${className}`}
    >
      {children}
    </Link>
  );
}
