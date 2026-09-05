"use client";

import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaHashtag,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaAws,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiJupyter,
  SiPycharm,
  SiSublimetext,
  SiPostman,
  SiVercel,
  SiRender,
  SiNetlify,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";
import { DiVisualstudio } from "react-icons/di";

/* ================= Animation Variants ================= */
const cardVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -80,
  },
  hiddenRight: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

/* ================= Skills Data ================= */
const skillsData = [
  {
    title: "Programming Languages",
    subtitle: "Core languages powering application logic",
    icon: "🖥️",
    glow: "from-purple-400 to-indigo-400",
    skills: [
      { name: "C", icon: <FaCode />, color: "text-gray-900" },
      { name: "C#", icon: <FaHashtag />, color: "text-purple-600" },
      { name: ".NET", icon: <SiDotnet />, color: "text-indigo-600" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
    ],
  },
  {
    title: "Frontend Development",
    subtitle: "Interactive & responsive user interfaces",
    icon: "🌐",
    glow: "from-cyan-400 to-blue-400",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, color: "text-orange-600" },
      { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-600" },
      { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
      { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      // { name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-700" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-gray-800" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-500" },
    ],
  },
  {
    title: "Backend Development",
    subtitle: "APIs, logic & server-side architecture",
    icon: "⚙️",
    glow: "from-emerald-400 to-teal-400",
    skills: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-900" },
      { name: "Django", icon: <SiDjango />, color: "text-green-800" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Structured & NoSQL data storage",
    icon: "🗄️",
    glow: "from-orange-400 to-red-400",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-700" },
    ],
  },
  {
    title: "Tools & Work Environment",
    subtitle: "Daily tools for productivity & development",
    icon: "🛠️",
    glow: "from-pink-400 to-rose-400",
    skills: [
      { name: "VS Code", icon: <VscVscode />, color: "text-blue-600" },
      { name: "Visual Studio", icon: <DiVisualstudio />, color: "text-purple-700" },
      { name: "Jupyter Notebook", icon: <SiJupyter />, color: "text-orange-500" },
      { name: "PyCharm", icon: <SiPycharm />, color: "text-green-600" },
      { name: "Sublime Text", icon: <SiSublimetext />, color: "text-yellow-500" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    ],
  },
  {
    title: "Cloud & Deployment",
    subtitle: "Cloud platforms and deployment services for modern applications",
    icon: "☁️",
    glow: "from-sky-400 to-blue-500",
    skills: [
      { name: "AWS", icon: <FaAws />, color: "text-orange-500" },
      { name: "Vercel", icon: <SiVercel />, color: "text-gray-900" },
      { name: "Render", icon: <SiRender />, color: "text-purple-600" },
      { name: "Netlify", icon: <SiNetlify />, color: "text-teal-500" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    ],
  },
];

/* ================= Component ================= */
export default function TechnicalSkills() {
  return (
    <section className="w-full bg-[#edf9fe] py-16 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* ===== Header ===== */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-bold text-[#001c55]">
            Technical Expertise
          </h2>
        </motion.div>

        {/* ===== Skills Grid (Matching Screenshot 5) ===== */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative"
            >
              {/* Outer Glow Halo */}
              <div
                className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${category.glow} opacity-35 blur-2xl`}
              />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100/80">
                {/* Card Header */}
                <div className="mb-8 text-left">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-2xl sm:text-3xl">{category.icon}</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm sm:text-base">
                    {category.subtitle}
                  </p>
                </div>

                {/* Skill Tiles (Grid of 3 columns matching Screenshot 5) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
                  {category.skills.map((skill, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="flex flex-col items-center justify-center gap-3 p-5 rounded-2xl bg-white shadow-sm hover:shadow-md border border-gray-100/90 cursor-pointer"
                    >
                      <span className={`text-4xl ${skill.color}`}>
                        {skill.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-800 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
