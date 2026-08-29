"use client";

import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import CUPL from "../assets/CUPL.jpeg";

const workData = [
  {
    company: "Chandrakala Universal Pvt Ltd",
    position: "Software Developer",
    logo: CUPL,
    start: "August 2025",
    end: "Present",
    location: "Prayagraj, India",
    website: "http://chandrakala.co.in/",
    description:
      "Delivering scalable full-stack applications using React, C# .NET, MySQL, and MERN technologies. Actively involved in frontend development, backend API creation, database design, and cloud deployment, with a strong focus on performance, security, and maintainability.",
    points: [
      "Engineered full MERN-stack applications (MongoDB, Express, React, Node.js) for high-traffic environments.",
      "Integrated decoupled frontend and backend systems through secure, well-documented RESTful APIs.",
      "Enhanced system performance, security protocols, database queries, and code maintainability.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function WorkExperience() {
  return (
    <section className="w-full bg-sky-50 py-16 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 text-center mb-12 md:mb-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          variants={fadeUp}
        >
          <FaBriefcase className="text-[#0a3d62] text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a3d62] text-center">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline Wrapper */}
        <div className="relative">
          <div className="flex flex-col gap-12">
            {workData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-sky-100 p-6 sm:p-8 hover:shadow-xl transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {/* Logo Column */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-sky-50 p-2.5 shadow-inner flex items-center justify-center border border-sky-200/50">
                    <img
                      src={item.logo?.src || item.logo}
                      alt={`${item.company} Logo`}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow space-y-4 text-left w-full">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-sky-100 pb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0a3d62]">
                        {item.company}
                      </h3>
                      <p className="text-base sm:text-lg font-semibold text-sky-800">
                        {item.position}
                      </p>
                    </div>

                    <div className="text-sm text-gray-500 sm:text-right">
                      <span className="inline-block px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-1">
                        {item.start} – {item.end}
                      </span>
                      <p className="text-xs text-gray-500 font-medium">{item.location}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Points */}
                  <ul className="space-y-2 text-base text-gray-600 pt-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-orange-500 text-base mt-0.5 flex-shrink-0">⚡</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  {item.website && (
                    <div className="pt-2 flex justify-end">
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2 bg-[#043D5D] hover:bg-[#06577e] text-white rounded-lg text-sm font-medium transition shadow-sm hover:shadow"
                      >
                        Visit Company →
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
