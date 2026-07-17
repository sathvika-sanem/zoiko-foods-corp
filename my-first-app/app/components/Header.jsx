import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full h-16 bg-white/95 shadow-[0px_2px_20px_rgba(0,0,0,0.10)] backdrop-blur-[5px]">
      <div className="max-w-[1440px] h-full mx-auto px-[88px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Zoiko Foods"
            width={172}
            height={53}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
          >
            About Us
          </Link>

          <Link
            href="/brands"
            className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
          >
            Our Brands
          </Link>

          <Link
            href="/heritage"
            className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
          >
            Heritage & Roots
          </Link>

          <Link
            href="/journal"
            className="text-[#2C2C2C] text-base font-normal leading-6 hover:text-[#1E4538] transition"
          >
            Culinary Journal
          </Link>

          <Link
            href="/distribution"
            className="text-[#2C2C2C] text-sm font-normal leading-6 hover:text-[#1E4538] transition"
          >
            Distribution
          </Link>
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="bg-[#1E4538] text-white text-base font-semibold px-8 py-3 rounded-lg shadow-[0px_1px_2px_rgba(0,0,0,0.05)] hover:bg-[#17372d] transition"
        >
          Contact Us
        </Link>

      </div>
    </header>
  );
}