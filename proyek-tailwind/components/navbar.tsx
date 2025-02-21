"use client"; // Diperlukan untuk komponen interaktif di Next.js 13+

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi"; // Icon hamburger & close

export default function Navbar() {
  const pathname = usePathname(); // Untuk mengetahui halaman yang sedang aktif
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold">
          MyLogo
        </Link>

        {/* Menu untuk desktop */}
        <ul className="hidden md:flex space-x-6">
          {["Home", "About", "Contact"].map((item) => {
            const link = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <li key={item}>
                <Link href={link} className={`text-white hover:text-gray-200 ${pathname === link ? "border-b-2 border-white" : ""}`}>
                  {item}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Button (Mobile) */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu untuk Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 p-4 absolute top-16 left-0 w-full">
          <ul className="flex flex-col space-y-4 text-center">
            {["Home", "About", "Contact"].map((item) => {
              const link = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <li key={item}>
                  <Link
                    href={link}
                    className="text-white text-lg block hover:text-gray-200"
                    onClick={() => setMenuOpen(false)} // Tutup menu saat link diklik
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
