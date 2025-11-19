import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex gap-6">
      <Link href="/home" className="hover:text-gray-300">Home</Link>
      <Link href="/about" className="hover:text-gray-300">About</Link>
      <Link href="/posts" className="hover:text-gray-300">Posts</Link>
    </nav>
  );
};

export default Header;


