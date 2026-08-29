"use client";

import React from "react";
import {
  SiTensorflow,
  SiKeras,
  SiPycharm,
  SiJupyter,
  SiPython,
  SiOpencv,
} from "react-icons/si";
import { motion } from "framer-motion";
import maincontentimg from "../assets/Data analysis-amico.svg";

export default function DataAnalyst() {
  return (
    <section className="w-full bg-[#edf9fe] py-12 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* SECTION TITLE (Centered at top) */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001c55] mb-12 md:mb-20"
        >
          What I Do
        </motion.h2>

        {/* 2-COLUMN LAYOUT: Text first on mobile, Image second */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* IMAGE (Second on mobile, Left on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src={maincontentimg?.src || maincontentimg}
              alt="Data Science & Machine Learning Illustration"
              className="w-full max-w-xs sm:max-w-md lg:max-w-xl object-contain"
            />
          </motion.div>

          {/* TEXT (First on mobile, Right on desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#001c55]">
              Data Science &amp; Machine Learning
            </h3>

            {/* ICONS ROW */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 sm:gap-6 text-3xl sm:text-4xl md:text-5xl py-2">
              <SiTensorflow className="text-[#F7B52C]" title="TensorFlow" />
              <SiKeras className="text-[#D00000]" title="Keras" />
              <SiPycharm className="text-[#21D789]" title="PyCharm" />
              <SiJupyter className="text-[#F37626]" title="Jupyter" />
              <SiPython className="text-[#3776AB]" title="Python" />
              <SiOpencv className="text-black" title="OpenCV" />
            </div>

            {/* LIST */}
            <ul className="space-y-4 text-sm sm:text-base md:text-lg text-gray-600 text-left pt-2">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Building scalable AI models using TensorFlow &amp; PyTorch.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Expertise in Computer Vision, NLP &amp; automation.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  End-to-end ML pipelines from preprocessing to deployment.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl leading-none flex-shrink-0">
                  ⚡
                </span>
                <span className="leading-relaxed">
                  Advanced statistical analysis &amp; visualization.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
