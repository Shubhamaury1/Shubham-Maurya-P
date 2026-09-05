"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import heroimage from "../assets/feelingProud.svg";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#edf9fe] pt-6 pb-14 md:py-20 overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* LEFT / TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full md:w-1/2 space-y-5 sm:space-y-6 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#001c55] tracking-tight"
          >
            Shubham Maurya
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl italic font-semibold text-[#001c55]"
          >
            ( Full-Stack Developer )
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 font-medium leading-relaxed max-w-xl"
          >
            A passionate Full-Stack Software Developer dedicated to building
            end-to-end digital products that are scalable, sustainable, and
            engineered to deliver real-world impact.
          </motion.p>

          {/* SOCIAL ICONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="flex items-center justify-center md:justify-start space-x-5 sm:space-x-6 text-2xl sm:text-3xl md:text-4xl pt-2"
          >
            <a
              href="https://github.com/Shubhamaury1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-900 hover:scale-115 transition transform duration-200"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/shubham-maurya-developer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#0077b5] hover:scale-115 transition transform duration-200"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
              className="text-[#ff0000] hover:scale-115 transition transform duration-200"
            >
              <FaYoutube />
            </a>

            <a
              href="mailto:shubhamaurya74@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email Shubham"
              className="text-[#ea4335] hover:scale-115 transition transform duration-200"
            >
              <HiOutlineMail />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="text-[#e4405f] hover:scale-115 transition transform duration-200"
            >
              <FaInstagram />
            </a>
          </motion.div>

          {/* BUTTON */}
          <div className="pt-2 flex justify-center md:justify-start w-full">
            <a
              href="https://github.com/Shubhamaury1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="bg-[#001c55] hover:bg-[#00287a] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md shadow-md flex items-center gap-2.5 text-sm sm:text-base md:text-lg font-semibold transition"
              >
                <span>⭐</span> Star Me On Github
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT / BOTTOM IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={heroimage?.src || heroimage}
            alt="Shubham Maurya Hero Illustration"
            className="w-full max-w-xs sm:max-w-md lg:max-w-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
