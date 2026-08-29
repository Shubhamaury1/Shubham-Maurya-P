"use client";

import React from "react";
import { motion } from "framer-motion";
import ugiLogo from "../assets/UGI.jpeg";
import mhps from "../assets/MHPS.jpg";

export default function Degree() {
  const degreeData = [
    {
      logo: ugiLogo,
      university: "United Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      duration: "2021 - 2025",
      points: [
        "Studied core computer science & software engineering disciplines: Data Structures, Algorithms, DBMS, Operating Systems, Machine Learning, and Computer Networks.",
        "Completed specialized coursework in Machine Learning, Data Science, and AWS Cloud Infrastructure.",
        "Engineered capstone projects demonstrating full-stack execution, system design, and problem-solving.",
      ],
      button: "Visit Website",
      link: "https://www.united.ac.in/uit/",
    },
    {
      logo: mhps,
      university: "Mother Haleema Public School",
      degree: "Intermediate Education (Class XII)",
      duration: "2019 - 2021",
      points: [
        "Studied core PCM subjects including Physics, Chemistry, and Mathematics with conceptual depth.",
        "Developed strong foundation in logical reasoning, numerical analysis, and algorithmic thinking.",
        "Actively participated in STEM exhibitions and academic competitions.",
      ],
      button: "Visit Website",
      link: "https://mhps.in/",
    },
    {
      logo: mhps,
      university: "Mother Haleema Public School",
      degree: "High School Education (Class X)",
      duration: "2017 - 2019",
      points: [
        "Studied core curricula in Science, Mathematics, English, and Computer Applications with high academic standing.",
        "Demonstrated strong self-discipline, time management, and commitment towards academic excellence.",
        "Fostered early passion for computing, technology, and applied science.",
      ],
      button: "Visit Website",
      link: "https://mhps.in/",
    },
  ];

  return (
    <section className="w-full bg-sky-50 py-16 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#0C2C57] mb-12 md:mb-16"
        >
          Degrees Received
        </motion.h2>

        <div className="space-y-16">
          {degreeData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-sky-100 p-6 sm:p-8 hover:shadow-xl transition"
            >
              {/* Logo Column */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-sky-50 p-3 shadow-inner flex items-center justify-center border border-sky-200/50">
                  <img
                    src={item.logo?.src || item.logo}
                    alt={`${item.university} Logo`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Content Column */}
              <div className="flex-grow space-y-4 text-left w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-sky-100 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#001C55]">
                      {item.university}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-sky-800">
                      {item.degree}
                    </p>
                  </div>
                  <span className="inline-block px-3.5 py-1 bg-sky-100 text-sky-900 font-semibold text-sm rounded-full self-start sm:self-center">
                    {item.duration}
                  </span>
                </div>

                <div className="space-y-2.5 pt-1">
                  {item.points.map((p, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-orange-500 text-base mt-1 flex-shrink-0">⚡</span>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                        {p}
                      </p>
                    </div>
                  ))}
                </div>

                {item.link && (
                  <div className="pt-3 flex justify-end">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-[#043D5D] hover:bg-[#06577e] text-white rounded-lg text-sm font-medium transition shadow-sm hover:shadow"
                    >
                      {item.button}
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
