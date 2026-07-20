"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/brands", label: "Our Brands" },
  { href: "/heritage", label: "Heritage & Roots" },
  { href: "/journal", label: "Culinary Journal" },
  { href: "/distribution", label: "Distribution" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white/95 shadow-[0px_2px_20px_rgba(0,0,0,0.10)] backdrop-blur-[5px] relative z-50">
      <div className="max-w-[1440px] h-16 mx-auto px-4 md:px-8 xl:px-[88px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Zoiko Foods"
            width={172}
            height={53}
            priority
            className="w-[130px] md:w-[172px] h-auto"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[#2C2C2C] ${
                link.label === "Distribution" ? "text-sm" : "text-base"
              } font-normal leading-6 hover:text-[#1E4538] transition`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-[#1E4538] text-white text-sm md:text-base font-semibold px-4 md:px-8 py-2 md:py-3 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#17372d] transition"
          >
            Contact Us
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Toggle menu"
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-[2px] bg-[#1E4538] transition-transform ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#1E4538] transition-opacity ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-[#1E4538] transition-transform ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-[0px_10px_20px_rgba(0,0,0,0.10)] z-50 flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#2C2C2C] text-base font-normal px-6 py-3 hover:text-[#1E4538] hover:bg-[#F9FFF8] transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
