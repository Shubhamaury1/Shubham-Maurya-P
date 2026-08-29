"use client";

import React from "react";
import fullstackimg from "../assets/Code typing-pana.svg";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNpm,
} from "react-icons/si";
import { motion } from "framer-motion";

function FullStack() {
  return (
    <section className="w-full bg-[#edf9fe] py-12 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* LEFT / TOP CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c55]">
              Full Stack Development
            </h2>

            {/* Icons Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6 text-3xl sm:text-4xl md:text-5xl py-2">
              <SiHtml5 className="text-[#E34F26]" title="HTML5" />
              <SiCss className="text-[#1572B6]" title="CSS" />
              <SiJavascript className="text-[#F7DF1E]" title="JavaScript" />
              <SiReact className="text-[#61DAFB]" title="React" />
              <SiNodedotjs className="text-[#339933]" title="Node.js" />
              <SiExpress className="text-gray-800" title="Express.js" />
              <SiMongodb className="text-[#47A248]" title="MongoDB" />
              <SiMysql className="text-[#4479A1]" title="MySQL" />
              <SiNpm className="text-[#CB3837]" title="npm" />
            </div>

            {/* Bullet Points */}
            <ul className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600 text-left pt-2">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Building responsive Single-Page Applications (SPA) and server-rendered web applications using React.js and Next.js.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Developing robust RESTful APIs and backend microservices using Node.js, Express, and .NET Core.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Designing optimized database architectures and query performance with MongoDB, MySQL, and PostgreSQL.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Seamless integration of third-party services, payment gateways, and authentication protocols (OAuth, JWT).
                </span>
              </li>
            </ul>
          </motion.div>

          {/* RIGHT / BOTTOM IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={fullstackimg?.src || fullstackimg}
              alt="Full Stack Development Illustration"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default FullStack;
