import { useState } from "react";
import logo from "../assets/newlogo.png";
import { useInView } from "./useInViewHook";
import hero1 from '../assets/Hero1.png'

export default function NavBar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tab, setTab] = useState('');
  const [ref, visible] = useInView();

  return (
    <nav className="font-[Passero_One] fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200 text-black dark:bg-black/80 dark:text-white dark:border-gray-700">

      <div ref={ref} className={`  ${visible ? "slide" : "opacity-0 translate-y-16"} flex items-center justify-between h-20 px-6 md:px-10 max-w-7xl mx-auto`}>

        {/* Logo */}
        <img
          src={logo}
          alt="ForkedMind logo"
          className="h-10 w-auto"
        />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
          <a href="/" className={`hover:text-black transition dark:hover:text-white ${tab === 'home' ? 'dark:text-gray-300' : ''}`} onClick={() => {
            setTab('home');
            console.log(tab);
          }}>Home</a>
          <a href="/arena" className="hover:text-black dark:hover:text-white transition">Find AI Arena</a>
          <a href="/about" className="hover:text-black transition dark:hover:text-white">About Us</a>
          <a href="/community" className="hover:text-black transition dark:hover:text-white">Community</a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle (visual only) */}
          <label className="flex items-center cursor-pointer select-none">
            <span className="text-md text-gray-500 p-2">Light</span>
            <div className="relative">

              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />

              <div className="w-12 h-6 bg-blue-500 rounded-full peer-checked:bg-gray-600 transition-colors duration-300 dark:bg-black dark:peer-checked:bg-black" />

              <span className="absolute -translate-y-1/2 left-1 text-sm transition-transform duration-300 peer-checked:translate-x-3 transition-all ease-in">
                <img
                  src={hero1}
                  alt="heh"
                  className="w-[47%] h-[50%] rounded-full
    bg-white shadow-[0_0_0_1px_#FFFFFF]
       dark:bg-white dark:[box-shadow:2px_2px_0px_1px_#1e1b1b]
    dark:invert dark:scale-25"
                />
              </span>

            </div>
            <span className="text-md text-gray-500 p-2">Dark</span>
          </label>
          {/* CTA (hidden on very small screens) */}
          <a href="/download" className="hidden sm:inline-block bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition duration-200 dark:bg-white dark:text-black">
            Download
          </a>

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
        <div className="md:hidden bg-white text-black border-t border-gray-200 px-6 py-4 space-y-4 text-sm font-semibold dark:bg-black/80 dark:text-white dark:border-gray-700">
          <a href="/" className="block">Home</a>
          <a href="/arena" className="block">Find AI Arena</a>
          <a href="/about" className="block">About Us</a>
          <a href="/community" className="block">Community</a>
          <a href="/download" className="block w-max bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border-2 border-black hover:bg-white hover:text-black transition duration-200 dark:bg-white dark:text-black">
            Download
          </a>
        </div>
      )}

    </nav>
  );
}