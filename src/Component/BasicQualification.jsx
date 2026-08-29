"use client";

import React from "react";
import { motion } from "framer-motion";
import educationImg from "../assets/education.svg";
import { LiaAws } from "react-icons/lia";
import { SiKaggle, SiGeeksforgeeks } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

export default function BasicQualification() {
  return (
    <section className="w-full bg-sky-50 py-12 md:py-20">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* IMAGE SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={educationImg?.src || educationImg}
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain drop-shadow-sm"
              alt="Education and Academic Background"
            />
          </motion.div>

          {/* TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#092E53] tracking-tight">
              Education
            </h1>

            <p className="text-xl sm:text-2xl text-sky-800 font-semibold">
              Basic Qualifications &amp; Certifications
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Equipped with a solid foundation in computer science principles, software engineering, and analytical problem-solving through academic rigor and ongoing skill certifications.
            </p>

            {/* Logos Row */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-3 text-4xl sm:text-5xl">
              {/* AWS ICON */}
              <a
                href="https://aws.amazon.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AWS Certification"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition duration-200"
              >
                <LiaAws className="text-orange-500" />
              </a>

              {/* GFG ICON */}
              <a
                href="https://www.geeksforgeeks.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeeksforGeeks Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition duration-200"
              >
                <SiGeeksforgeeks className="text-green-700 text-3xl sm:text-4xl" />
              </a>

              {/* HACKER RANK */}
              <a
                href="https://www.hackerrank.com/profile/shubhamaurya74"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition duration-200"
              >
                <FaHackerrank className="text-green-600 text-3xl sm:text-4xl" />
              </a>

              {/* KAGGLE */}
              <a
                href="https://www.kaggle.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle Profile"
                className="p-3 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-110 transition duration-200"
              >
                <SiKaggle className="text-sky-600 text-3xl sm:text-4xl" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
