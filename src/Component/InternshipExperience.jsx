"use client";

import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { motion } from "framer-motion";
import UGIS from "../assets/UGIS.png";
import internshala from "../assets/internshala.png";
import algoscale from "../assets/algoscale_logo.jpeg";
import web3task from "../assets/Web3task.png";

const internshipData = [
  {
    company: "Web3task",
    position: "MERN Stack Intern",
    logo: web3task,
    start: "June 2024",
    end: "August 2024",
    location: "Remote, India",
    website: "https://web3task.com/",
    description:
      "Worked as a MERN Stack Intern, gaining hands-on experience in building and maintaining full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Contributed to both frontend and backend development while following clean coding practices and modern development workflows.",
    points: [
      "Developed full-stack web applications using the MERN stack.",
      "Worked with CRUD operations, authentication, and backend business logic.",
      "Built responsive, dynamic, and accessible user interfaces using React.js.",
    ],
  },
  {
    company: "Internshala",
    position: "Data Analyst Intern",
    logo: internshala,
    start: "March 2024",
    end: "March 2024",
    location: "Remote, India",
    website: "https://internshala.com/",
    description:
      "Gained hands-on experience in collecting, cleaning, analyzing, and visualizing data to extract actionable insights. Assisted in transforming raw data into meaningful reports to support data-driven decision-making.",
    points: [
      "Utilized SQL to query, clean, and analyze relational database records.",
      "Optimized analytical SQL queries for faster data manipulation on large datasets.",
      "Produced structured summary dashboards and business intelligence reports.",
    ],
  },
  {
    company: "Algoscale Technologies Pvt Ltd",
    position: "Machine Learning Intern",
    logo: algoscale,
    start: "November 2023",
    end: "December 2023",
    location: "Remote, India",
    website: "https://algoscale.com/",
    description:
      "Gained hands-on experience in developing, training, and evaluating machine learning models. Contributed to data preprocessing, feature engineering, and model optimization while working with real-world datasets and practical ML workflows.",
    points: [
      "Built and trained machine learning pipelines using Python and Scikit-learn.",
      "Utilized NumPy and Pandas for feature engineering, data imputation, and EDA.",
      "Evaluated models using performance metrics including accuracy, precision, recall, and RMSE.",
    ],
  },
  {
    company: "Internshala",
    position: "DevOps & Cloud Intern",
    logo: internshala,
    start: "July 2023",
    end: "September 2023",
    location: "Remote, India",
    website: "https://internshala.com/",
    description:
      "Gained practical experience with AWS cloud services. Implemented cloud fundamentals including virtual servers, storage, deployment, and security while working on hands-on labs and real-world architectures.",
    points: [
      "Configured IAM users, roles, and permissions following least-privilege cloud security best practices.",
      "Gained hands-on experience with core AWS services such as EC2, S3, and VPC.",
      "Hosted and deployed containerized web applications using AWS cloud infrastructure.",
    ],
  },
  {
    company: "United Global InfoServices Pvt Ltd",
    position: "Python Programming Intern",
    logo: UGIS,
    start: "May 2022",
    end: "June 2022",
    location: "Prayagraj, India",
    website: "https://www.united.ac.in/summertraining/",
    description:
      "Gained hands-on experience in developing, testing, and optimizing Python applications. Contributed to projects involving data processing, automation, and backend logic while improving algorithmic efficiency.",
    points: [
      "Performed automated data cleaning, processing, and transformation using Python scripts.",
      "Created interactive data reports following clean code architecture.",
      "Applied core object-oriented programming (OOP) principles, data structures, and exception handling.",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function InternshipExperience() {
  return (
    <section className="w-full bg-sky-50 py-16 md:py-24">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <motion.div
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 text-center mb-12 md:mb-16 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.25, once: true }}
          variants={fadeUp}
        >
          <FaUserGraduate className="text-[#0a3d62] text-2xl sm:text-3xl md:text-4xl flex-shrink-0" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a3d62] text-center">
            Internship Experience
          </h2>
        </motion.div>

        {/* List of Cards */}
        <div className="flex flex-col gap-10">
          {internshipData.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-sky-100 p-6 sm:p-8 hover:shadow-xl transition"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Logo Column */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-sky-50 p-2.5 shadow-inner flex items-center justify-center border border-sky-200/50">
                  <img
                    src={item.logo?.src || item.logo}
                    alt={`${item.company} Logo`}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>
              </div>

              {/* Content Card */}
              <div className="flex-grow space-y-4 text-left w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-sky-100 pb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0a3d62]">
                      {item.company}
                    </h3>
                    <p className="text-base sm:text-lg font-semibold text-sky-800">
                      {item.position}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 sm:text-right">
                    <span className="inline-block px-3 py-1 bg-sky-100 text-sky-900 font-semibold rounded-full mb-1">
                      {item.start} – {item.end}
                    </span>
                    <p className="text-xs text-gray-500 font-medium">{item.location}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="space-y-2 text-base text-gray-600 pt-1">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-orange-500 text-base mt-0.5 flex-shrink-0">⚡</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                {item.website && (
                  <div className="pt-2 flex justify-end">
                    <a
                      href={item.website}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2 bg-[#043D5D] hover:bg-[#06577e] text-white rounded-lg text-sm font-medium transition shadow-sm hover:shadow"
                    >
                      Visit Company →
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
