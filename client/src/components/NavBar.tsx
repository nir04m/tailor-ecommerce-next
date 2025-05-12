// client/src/components/NavBar.tsx
import Link from 'next/link';
import React from 'react';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Left: Brand */}
      <div className="text-2xl font-bold text-black">
        <Link href="/">Cail Clothes</Link>
      </div>

      {/* Middle: Links + Search */}
      <div className="flex items-center space-x-6">
        <Link href="/new-arrivals" className="text-black hover:underline">
          New Arrivals
        </Link>
        <Link href="/men" className="text-black hover:underline">
          Men
        </Link>
        <Link href="/women" className="text-black hover:underline">
          Women
        </Link>
        {/* Search bar right after Women */}
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black text-black"
        />
      </div>

      {/* Right: Auth & Cart */}
      <div className="flex space-x-4 text-black">
        <Link href="/login" className="hover:underline">
          Login
        </Link>
        <Link href="/cart" className="hover:underline">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
