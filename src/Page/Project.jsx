"use client";

import React from "react";
import { motion } from "framer-motion";
import projectimg from "../assets/projects_image.svg";
import ProjectCard from "../Component/ProjectCard";
import DeployedProjectCard from "../Component/DeployedProjectCard";

function Project() {
  return (
    <div className="w-full bg-sky-50">
      {/* Intro Hero Section */}
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
              src={projectimg?.src || projectimg}
              alt="Projects and Technical Portfolio"
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
              Projects
            </h1>

            <h2 className="text-xl sm:text-2xl text-sky-800 font-semibold">
              Full-Stack, ML &amp; Data Solutions
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              My projects leverage a modern spectrum of technologies. I specialize in developing end-to-end full-stack architectures, machine learning models, and real-time business intelligence dashboards, deployed securely on cloud platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Cards Section */}
      <DeployedProjectCard />
      <ProjectCard />
    </div>
  );
}

export default Project;
