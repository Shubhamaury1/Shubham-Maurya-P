"use client";

import React from "react";
import {
  SiPycharm,
  SiJupyter,
  SiPython,
  SiFlask,
  SiDjango,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Python Developer.svg";

export default function Python() {
  return (
    <section className="w-full bg-[#edf9fe] py-12 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* IMAGE LEFT (TOP on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={maincontentimg?.src || maincontentimg}
              alt="Python Developer Illustration"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl object-contain"
            />
          </motion.div>

          {/* TEXT RIGHT (BOTTOM on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c55]">
              Python Developer
            </h2>

            {/* ICONS ROW */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6 text-3xl sm:text-4xl md:text-5xl py-2">
              <SiPycharm className="text-[#21D789]" title="PyCharm" />
              <SiJupyter className="text-[#F37626]" title="Jupyter" />
              <SiPython className="text-[#3776AB]" title="Python" />
              <SiFlask className="text-black" title="Flask" />
              <SiDjango className="text-[#092E20]" title="Django" />
            </div>

            {/* LIST */}
            <ul className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600 text-left pt-2">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Proficient in building robust backend systems using Python, Django and Flask.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Strong command over Python tools like PyCharm, VS Code, and Jupyter Lab.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Experience with Django ORM, SQLAlchemy, MySQL, and MongoDB.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Skilled at deploying Python apps on AWS, Render, Vercel, and Docker.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
