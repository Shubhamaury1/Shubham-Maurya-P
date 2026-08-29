"use client";

import React from "react";
import { motion } from "framer-motion";
import experienceimg from "../assets/experience.svg";
import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import WorkExperience from "../Component/WorkExperience";
import InternshipExperience from "../Component/InternshipExperience";

function Experience() {
  return (
    <div className="w-full bg-sky-50">
      {/* Hero Intro Section */}
      <section className="w-full py-12 md:py-20">
        <div className="w-full px-6 sm:px-10 lg:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={experienceimg?.src || experienceimg}
              alt="Experience and Professional Career"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-sm"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#092E53] tracking-tight">
              Experience
            </h1>

            <h2 className="text-xl sm:text-2xl text-sky-800 font-semibold">
              Work &amp; Internship History
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              I have collaborated with dynamic startups and fast-growing teams as a Software Developer and Data Analyst. I focus on developing scalable web architectures, automating workflows with Python, and delivering performant, user-centric software solutions.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2 text-2xl">
              <a
                href="https://github.com/Shubhamaury1"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition text-gray-800"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-maurya-4a275a232/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition text-sky-700"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.hackerrank.com/profile/shubhamaurya74"
                target="_blank"
                rel="noreferrer"
                aria-label="HackerRank Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition text-green-600"
              >
                <FaHackerrank />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work & Internship Components */}
      <WorkExperience />
      <InternshipExperience />
    </div>
  );
}

export default Experience;
