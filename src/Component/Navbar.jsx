"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Open Source", href: "/opensource" },
    { label: "Contact Me", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 left-0 w-full bg-[#edf9fe]/95 backdrop-blur-sm z-50 transition-all">
      <nav
        className="w-full flex justify-between items-center px-6 sm:px-10 lg:px-16 py-4 sm:py-5"
        aria-label="Main navigation"
      >
        {/* Brand Logo */}
        <Link href="/" aria-label="Shubham Maurya home" className="group">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center text-[#001c55] select-none cursor-pointer"
          >
            <span className="font-sans font-light text-lg sm:text-xl md:text-2xl lg:text-3xl mr-1 text-[#001c55]">
              &lt;
            </span>
            <span className="font-agustina text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#001c55] font-normal group-hover:opacity-90 transition-opacity">
              Shubham Maurya
            </span>
            <span className="font-sans font-light text-lg sm:text-xl md:text-2xl lg:text-3xl ml-1 text-[#001c55]">
              / &gt;
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base sm:text-lg lg:text-xl transition-colors duration-200 ${
                  isActive
                    ? "font-bold text-[#001c55]"
                    : "font-medium text-[#001c55] hover:text-[#00287a]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile 3-Dots Menu Button (Clean, no box/background) */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="md:hidden text-[#001c55] p-1.5 focus:outline-none hover:opacity-75 transition-opacity"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsThreeDotsVertical className="text-2xl sm:text-3xl text-[#001c55]" />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#edf9fe] border-t border-sky-200/50 px-6 py-4 space-y-3 shadow-lg overflow-hidden"
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-base sm:text-lg py-1.5 transition ${
                    isActive
                      ? "font-bold text-[#001c55]"
                      : "font-medium text-[#001c55] hover:text-[#00287a]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
