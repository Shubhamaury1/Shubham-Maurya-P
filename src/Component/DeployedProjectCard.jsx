"use client";

import React from "react";
import { motion } from "framer-motion";
import htmlIcon from "../assets/project_page_icons/html.png";
import cssIcon from "../assets/project_page_icons/css.png";
import jsIcon from "../assets/project_page_icons/js.png";
import reactIcon from "../assets/project_page_icons/react.png";
import mongodbIcon from "../assets/project_page_icons/mongodb.png";
import nodejsIcon from "../assets/project_page_icons/nodejs.png";
import expressIcon from "../assets/project_page_icons/expressjs.png";

const deployedProjects = [
  {
    title: "WashGo",
    description:
      "Smart doorstep vehicle care and car washing platform with instant booking, automated scheduling, and real-time order tracking.",
    date: "10-08-2025",
    tech: [
      { type: "image", src: reactIcon, name: "React.js" },
      { type: "image", src: nodejsIcon, name: "Node.js" },
      { type: "image", src: expressIcon, name: "Express.js" },
      { type: "image", src: mongodbIcon, name: "MongoDB" },
    ],
    link: "https://wash-go-gamma.vercel.app/",
  },
  {
    title: "House Modelling Website",
    description:
      "Interactive 3D architectural & real estate showcase featuring destination discovery, 3D floor plans, and smooth user journeys.",
    date: "01-08-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://house-modelling-website.vercel.app/",
  },
  {
    title: "Trip Travel Website",
    description:
      "Comprehensive travel planner website designed for exploring destinations, itineraries, and engaging tourism experiences.",
    date: "23-07-2024",
    tech: [
      { type: "image", src: htmlIcon, name: "HTML" },
      { type: "image", src: cssIcon, name: "CSS" },
      { type: "image", src: jsIcon, name: "JavaScript" },
    ],
    link: "https://trip-website-red.vercel.app/",
  },
  {
    title: "Weather App",
    description:
      "Full-featured interactive weather intelligence application delivering real-time forecasts, location search, and visual analytics.",
    date: "02-02-2025",
    tech: [
      { type: "image", src: reactIcon, name: "React.js" },
      { type: "image", src: expressIcon, name: "Express.js" },
      { type: "image", src: nodejsIcon, name: "Node.js" },
      { type: "image", src: mongodbIcon, name: "MongoDB" },
    ],
    link: "https://weather-app-iota-sand-63.vercel.app/",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function DeployedProjectCard() {
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
          Live Deployed Projects
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {deployedProjects.map((project, index) => (
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
      </div>
    </section>
  );
}
