"use client";

import React from "react";
import { motion } from "framer-motion";
import pythonIcon from "../assets/project_page_icons/python.png";
import djangoIcon from "../assets/project_page_icons/django.png";
import htmlIcon from "../assets/project_page_icons/html.png";
import cssIcon from "../assets/project_page_icons/css.png";
import jsIcon from "../assets/project_page_icons/js.png";
import powerBIIcon from "../assets/project_page_icons/powerBI.png";
import tableauIcon from "../assets/project_page_icons/tableau.png";
import excelIcon from "../assets/project_page_icons/excel.png";
import mysqlIcon from "../assets/project_page_icons/mysql.png";

/* ----------------------- PROJECT DATA ----------------------- */
const projects = [
  {
    title: "Diabetes Prediction Using ML",
    description:
      "Predictive healthcare application developed with machine learning algorithms to assess diabetes risk factors and support clinical insights.",
    date: "14-02-2025",
    tech: [
      { type: "image", src: pythonIcon, name: "Python" },
      { type: "image", src: djangoIcon, name: "Django" },
    ],
    link: "https://github.com/Shubhamaury1/Diabetes-Prediction-ML",
  },
  {
    title: "Amazon Sales Analytics Dashboard",
    description:
      "Comprehensive business intelligence dashboard built to visualize revenue growth, regional sales performance, and key retail metrics.",
    date: "01-03-2025",
    tech: [
      { type: "image", src: tableauIcon, name: "Tableau" },
      { type: "image", src: powerBIIcon, name: "Power BI" },
      { type: "image", src: mysqlIcon, name: "MySQL" },
      { type: "image", src: excelIcon, name: "MS Excel" },
    ],
    link: "https://github.com/Shubhamaury1/Amazon-Sales-Dashboard-Power-BI-",
  },
  {
    title: "OLA Ride Analytics Dashboard",
    description:
      "Operational intelligence dashboard developed to track ride volume, dynamic pricing trends, cancellation analytics, and driver revenue.",
    date: "25-02-2025",
    tech: [
      { type: "image", src: tableauIcon, name: "Tableau" },
      { type: "image", src: powerBIIcon, name: "Power BI" },
      { type: "image", src: mysqlIcon, name: "MySQL" },
      { type: "image", src: excelIcon, name: "MS Excel" },
    ],
    link: "https://github.com/Shubhamaury1/OLA-Dashboard-Using-Power-BI",
  },
  {
    title: "Amazon E-Commerce Clone",
    description:
      "Full e-commerce platform replicating core retail flows including catalog browsing, product filtering, cart state, and responsive checkout.",
    date: "09-02-2025",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://github.com/Shubhamaury1/Amazon-clone",
  },
  {
    title: "Spotify Music Streaming Clone",
    description:
      "Interactive audio streaming interface with playlist controls, real-time playback bars, and smooth transitions.",
    date: "17-04-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://github.com/Shubhamaury1/Spotify-clone-working-with-music",
  },
  {
    title: "Dynamic Password Generator",
    description:
      "Cryptographically secure password utility providing randomized credentials with configurable length and character sets.",
    date: "06-02-2024",
    tech: [
      { type: "image", src: jsIcon, name: "JavaScript" },
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
    ],
    link: "https://github.com/Shubhamaury1/password-generator",
  },
];

/* ----------------------- ANIMATIONS ----------------------- */
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* ----------------------- COMPONENT ----------------------- */
export default function ProjectCard() {
  return (
    <section className="w-full bg-sky-50 py-12 md:py-20">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0C2C57] text-center font-extrabold mb-10 md:mb-12"
        >
          Open Source &amp; Research Projects
        </motion.h2>

        {/* Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl border border-sky-100 hover:border-sky-300 transition duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Title */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition">
                    {project.title}
                  </h3>
                  <span className="text-sky-600 font-bold text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition duration-200">
                    ↗
                  </span>
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 text-left">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center text-xs sm:text-sm text-slate-500 pt-4 border-t border-sky-100/70">
                <span>{project.date}</span>

                <div className="flex gap-2 items-center">
                  {Array.isArray(project.tech) &&
                    project.tech.map((tech, i) => (
                      <div key={i} className="relative group/icon">
                        {tech.type === "image" && (
                          <img
                            src={tech.src?.src || tech.src}
                            alt={tech.name}
                            className="w-7 h-7 object-contain hover:scale-125 transition duration-200"
                            title={tech.name}
                          />
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* More Projects */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/Shubhamaury1?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="bg-[#092E53] hover:bg-[#0c3d76] text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-md hover:shadow-xl hover:scale-105 transition duration-200 flex items-center gap-2"
          >
            View More on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
