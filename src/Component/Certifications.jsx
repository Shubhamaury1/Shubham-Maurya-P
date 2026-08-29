"use client";

import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import pythonimg from "../assets/Python-logo.png";
import awsimg from "../assets/awslogo.png";
import mlimg from "../assets/ml.png";
import dataimg from "../assets/data.png";
import mysqlimg from "../assets/mysql.png";
import mongodbimg from "../assets/mongodb-logo.svg";

function CertCard({ item, index }) {
  const overlayControls = useAnimation();
  const cardControls = useAnimation();
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [isNavigating, setIsNavigating] = useState(false);

  // Auto slide when card enters viewport
  const handleViewportEnter = async () => {
    await overlayControls.start({
      y: 0,
      transition: { duration: 1.1, ease: [0.18, 0.47, 0.35, 1] },
    });

    await new Promise((res) => setTimeout(res, 900));
    if (!hovered) {
      await overlayControls.start({
        y: "-100%",
        transition: { duration: 1.0, ease: [0.19, 0.03, 0.17, 1] },
      });
    }
  };

  const handleMouseEnter = async () => {
    setHovered(true);
    cardControls.start({ scale: 1.03, y: -4, transition: { duration: 0.25 } });
    overlayControls.start({
      y: 0,
      transition: { duration: 0.5, ease: [0.18, 0.47, 0.35, 1] },
    });
  };

  const handleMouseLeave = async () => {
    setHovered(false);
    cardControls.start({ scale: 1, y: 0, transition: { duration: 0.25 } });
    overlayControls.start({
      y: "-100%",
      transition: { duration: 0.6, ease: [0.19, 0.03, 0.17, 1] },
    });
  };

  const handleClick = async () => {
    if (!item.link || isNavigating) return;
    setIsNavigating(true);
    await overlayControls.start({
      y: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    window.open(item.link, "_blank", "noopener,noreferrer");
    setIsNavigating(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={handleViewportEnter}
      animate={cardControls}
      className="rounded-2xl shadow-md hover:shadow-xl bg-white overflow-hidden cursor-pointer border border-sky-100/80 transition"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ transformOrigin: "center" }}
    >
      {/* IMAGE */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden p-6"
        style={{ background: item.bg }}
      >
        <img
          src={item.img?.src || item.img}
          alt={`${item.title} Certificate`}
          className="w-24 h-24 object-contain opacity-95 transition group-hover:scale-105"
        />

        <motion.div
          animate={overlayControls}
          initial={{ y: "-100%" }}
          className="absolute inset-0 bg-sky-950/75 backdrop-blur-[2px] flex items-center justify-center
                     text-white text-sm sm:text-base font-bold tracking-widest uppercase"
          style={{ pointerEvents: "none" }}
        >
          View Certificate ↗
        </motion.div>
      </div>

      {/* TEXT */}
      <div className="bg-[#F8FAFC] text-center py-4 px-4 border-t border-sky-100">
        <h3 className="text-lg font-bold text-[#001C55] line-clamp-1">{item.title}</h3>
        <p className="text-gray-500 text-sm mt-0.5">Instructor: {item.author}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const certData = [
    {
      title: "Cloud Computing with AWS",
      author: "Andrew Ng",
      img: awsimg,
      bg: "#222F3D",
      link: "https://drive.google.com/file/d/19BxzxZoXxJj7x3wBRlzFnDLszao0yaNB/view?usp=sharing",
    },
    {
      title: "Python",
      author: "Dhananjay Sharma",
      img: pythonimg,
      bg: "#8ec5ff",
      link: "https://drive.google.com/file/d/19Bk66SYbH3gST8tI8t8LIYERX3zJ6u0w/view?usp=sharing",
    },
    {
      title: "Machine Learning",
      author: "Shaad",
      img: mlimg,
      bg: "#e2e8f0",
      link: "https://drive.google.com/file/d/1lqenibHNsbi6-7aIFx7uIvTg8lOXZlu5/view?usp=sharing",
    },
    {
      title: "Data Analytics",
      author: "Tina McCreery",
      img: dataimg,
      bg: "#bedbff",
      link: "https://drive.google.com/file/d/1EvmvQbYUoiGPnf-hc-4Gfr0EPcTTiQe1/view?usp=sharing",
    },
    {
      title: "MySQL",
      author: "Harishankaran K",
      img: mysqlimg,
      bg: "white",
      link: "https://drive.google.com/file/d/1aEsBc9BuwvjEx5ye1sINCq3Au5HDQIT_/view?usp=sharing",
    },
    {
      title: "MongoDB",
      author: "Dev Ittycheria",
      img: mongodbimg,
      bg: "#a4f4cf",
      link: "https://drive.google.com/file/d/1rPO-KJdzqcbN15ortD3MDbIkvHc0czTo/view?usp=sharing",
    },
  ];

  return (
    <section className="w-full bg-sky-50 py-16 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0C2C57] mb-10 md:mb-14">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certData.map((item, index) => (
            <CertCard item={item} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
