"use client";

import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import shubham from "../assets/shubham/s1.png";
import { motion } from "framer-motion";
import Address from "../Component/Address";

function ContactMe() {
  return (
    <div className="w-full bg-sky-50">
      <section className="w-full py-12 md:py-20">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* ================= LEFT : PROFILE IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center items-center"
          >
            <img
              src={shubham?.src || shubham}
              alt="Shubham Maurya - Contact Profile"
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-[460px] object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-300 select-none"
            />
          </motion.div>

          {/* ================= RIGHT : CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#092E53] tracking-tight">
              Contact Me
            </h1>

            <h2 className="text-xl sm:text-2xl text-sky-800 font-semibold">
              Let's Connect &amp; Collaborate
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              I am actively open to discussing software engineering roles, full-stack web applications, machine learning projects, and data initiatives. Reach out via email or connect with me on any social platform.
            </p>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
              <a
                href="https://github.com/Shubhamaury1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SocialIcon icon={<FaGithub />} bg="bg-gray-900" />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-maurya-4a275a232/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SocialIcon icon={<FaLinkedinIn />} bg="bg-[#0077b5]" />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <SocialIcon icon={<FaFacebookF />} bg="bg-[#1877f2]" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <SocialIcon icon={<FaInstagram />} bg="bg-[#e4405f]" />
              </a>

              <a
                href="mailto:shubhammaurya7408@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
              >
                <SocialIcon icon={<HiOutlineMail className="text-xl" />} bg="bg-[#D64229]" />
              </a>
            </div>

            {/* ================= BUTTON ================= */}
            <div className="pt-3">
              <a
                href="https://drive.google.com/file/d/1kmRrW-MNCsfs2iQVQtUVZDjr_djEGzHh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#043D5D] hover:bg-[#06577e] text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition"
              >
                <span>📄</span> See My Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Address />
    </div>
  );
}

/* ================= SOCIAL ICON COMPONENT ================= */
const SocialIcon = ({ icon, bg = "bg-gray-900" }) => {
  return (
    <div
      className={`${bg} w-11 h-11 rounded-2xl flex items-center justify-center text-white text-lg shadow-sm hover:shadow-md hover:scale-115 transition duration-200`}
    >
      {icon}
    </div>
  );
};

export default ContactMe;
