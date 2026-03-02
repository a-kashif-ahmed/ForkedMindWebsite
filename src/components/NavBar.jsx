import { useState } from "react";
import logo from "../assets/full_logo.png";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="font-[Passero_One] fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">

      <div className="flex items-center justify-between h-20 px-6 md:px-10 max-w-7xl mx-auto">

        {/* Logo */}
         <img 
          src={logo}
          alt="ForkedMind logo"
          className="h-10 w-auto"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="/" className="hover:text-black transition">Home</a>
          <a href="/arena" className="hover:text-black transition">Find AI Arena</a>
          <a href="/about" className="hover:text-black transition">About Us</a>
          <a href="/community" className="hover:text-black transition">Community</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle (visual only) */}
          <label className="hidden sm:flex items-center gap-2 cursor-pointer select-none">
            <span className="text-xs text-gray-500">Light</span>

            <div className="relative">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-gray-600 transition-colors duration-300" />
              <span className="absolute top-1/2 -translate-y-1/2 left-1 text-sm transition-transform duration-300 peer-checked:translate-x-6">
                ♛
              </span>
            </div>

            <span className="text-xs text-gray-500">Dark</span>
          </label>

          {/* CTA (hidden on very small screens) */}
          <button className="hidden sm:inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition duration-200">
            Download
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-4 text-sm font-semibold">
          <a href="/" className="block">Home</a>
          <a href="/arena" className="block">Find AI Arena</a>
          <a href="/about" className="block">About Us</a>
          <a href="/community" className="block">Community</a>
        </div>
      )}

    </nav>
  );
}