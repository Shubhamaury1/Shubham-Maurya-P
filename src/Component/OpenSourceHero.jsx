"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiZap,
  FiSliders,
  FiSmartphone,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

function DataTableMockup() {
  return (
    <div className="relative w-full max-w-[620px] lg:max-w-none xl:max-w-[700px] 2xl:max-w-[760px] select-none">
      {/* Soft Blue Organic Background Blobs */}
      <div className="pointer-events-none absolute -left-12 top-1/4 h-56 w-56 rounded-full bg-sky-200/50 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl -z-10" />

      {/* Decorative Dot Matrix on Left */}
      <div className="pointer-events-none absolute -left-8 top-1/3 hidden sm:grid grid-cols-4 gap-2.5 opacity-30 -z-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      {/* Decorative Dot Matrix on Right */}
      <div className="pointer-events-none absolute -right-6 top-8 hidden sm:grid grid-cols-4 gap-2.5 opacity-30 -z-10">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-blue-500" />
        ))}
      </div>

      {/* Main Window Card */}
      <div className="relative rounded-3xl bg-white p-4 sm:p-7 shadow-[0_20px_50px_rgba(25,70,140,0.12)] border border-slate-100/90 backdrop-blur-sm">
        {/* macOS Window Top Bar */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100/70">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] shadow-xs" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] shadow-xs" />
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-xs">
            <span className="w-3 h-0.5 bg-slate-400 rounded-full" />
            <span className="w-2.5 h-2.5 border border-slate-400 rounded-xs" />
            <span className="text-xs font-bold leading-none">✕</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="pt-3.5 pb-3">
          <div className="relative flex items-center">
            <svg
              className="absolute left-3.5 h-4 w-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              readOnly
              placeholder="Search..."
              className="w-full sm:w-64 rounded-xl border border-slate-200/80 bg-slate-50/60 py-1.5 pl-9 pr-3 text-xs sm:text-sm text-slate-600 placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-800 font-bold">
                <th className="py-2.5 px-2 w-7">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                </th>
                <th className="py-2.5 px-3">Name</th>
                <th className="py-2.5 px-3">Role</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3">Date</th>
                <th className="py-2.5 px-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/70 text-slate-700">
              {/* Row 1 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-2">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                </td>
                <td className="py-3 px-3 font-bold text-slate-900">Shubham Maurya</td>
                <td className="py-3 px-3 text-slate-600">Developer</td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200/50">
                    Active
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600">28 Aug 2025</td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md border border-slate-200 bg-white shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md border border-rose-200 bg-rose-50/40 shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-2">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                </td>
                <td className="py-3 px-3 font-bold text-slate-900">John Doe</td>
                <td className="py-3 px-3 text-slate-600">Designer</td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200/50">
                    Active
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600">27 Aug 2025</td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md border border-slate-200 bg-white shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md border border-rose-200 bg-rose-50/40 shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-2">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                </td>
                <td className="py-3 px-3 font-bold text-slate-900">Jane Smith</td>
                <td className="py-3 px-3 text-slate-600">Manager</td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center rounded-md bg-rose-50 px-2.5 py-0.5 text-xs font-semibold text-rose-600 border border-rose-200/50">
                    Inactive
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600">26 Aug 2025</td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md border border-slate-200 bg-white shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md border border-rose-200 bg-rose-50/40 shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>

              {/* Row 4 */}
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="py-3 px-2">
                  <div className="h-4 w-4 rounded border border-slate-300 bg-white" />
                </td>
                <td className="py-3 px-3 font-bold text-slate-900">Alex Johnson</td>
                <td className="py-3 px-3 text-slate-600">Developer</td>
                <td className="py-3 px-3">
                  <span className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 border border-emerald-200/50">
                    Active
                  </span>
                </td>
                <td className="py-3 px-3 text-slate-600">25 Aug 2025</td>
                <td className="py-3 px-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-slate-600 hover:text-slate-900 rounded-md border border-slate-200 bg-white shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                    <button className="p-1.5 text-rose-500 hover:text-rose-700 rounded-md border border-rose-200 bg-rose-50/40 shadow-xs">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Footer / Pagination */}
        <div className="flex items-center justify-between pt-3.5 border-t border-slate-100 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>Rows per page:</span>
            <div className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-xs font-semibold text-slate-700 shadow-xs">
              <span>5</span>
              <svg className="h-3 w-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span>1-4 of 4</span>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded-md border border-slate-200 bg-white text-slate-400 hover:text-slate-700 shadow-xs">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-1 rounded-md border border-slate-200 bg-white text-slate-400 hover:text-slate-700 shadow-xs">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating React Atom Badge at Bottom Right */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        whileHover={{ scale: 1.08, rotate: 6 }}
        className="absolute -bottom-5 -right-2 sm:-bottom-6 sm:-right-4 z-20 rounded-3xl bg-white/95 backdrop-blur-md p-3 sm:p-4 shadow-[0_12px_30px_rgba(0,180,255,0.22)] border border-sky-100"
      >
        <svg
          viewBox="-11.5 -10.23174 23 20.46348"
          className="h-10 w-10 sm:h-14 sm:w-14 text-[#00D8FF] animate-[spin_20s_linear_infinite]"
        >
          <circle cx="0" cy="0" r="2.05" fill="#00D8FF" />
          <g stroke="#00D8FF" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
}

function OpenSourceHero() {
  return (
    <section className="relative w-full overflow-hidden bg-sky-50 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      {/* ================= AMBIENT BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] lg:h-[650px] lg:w-[650px] rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-[15%] -z-10 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] rounded-full bg-sky-200/35 blur-3xl" />

      {/* Decorative dots grid */}
      <div className="pointer-events-none absolute right-12 top-8 hidden lg:grid grid-cols-6 gap-2.5 opacity-25 -z-10">
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        ))}
      </div>

      {/* ================= FULL WIDTH RESPONSIVE CONTAINER ================= */}
      <div className="w-full max-w-[1800px] mx-auto">
        {/* ================= HERO GRID ================= */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16 2xl:gap-20">
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full space-y-4 sm:space-y-5 text-left"
          >
            {/* Project Badge */}
            <div className="inline-flex items-center gap-2 rounded-xl border border-blue-200/70 bg-[#EBF3FC] px-3.5 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-[#2054A6] shadow-xs">
              <FiCode className="text-sm" />
              <span>&lt;&gt; Open Source Project</span>
            </div>

            {/* Title + Version Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-tight tracking-tight text-[#0B1E3B]">
                react-flexi-datatable
              </h1>
              <span className="rounded-md border border-blue-200 bg-[#EBF1FF] px-2.5 py-1 text-xs font-bold text-[#2563EB] shadow-xs">
                v1.0.5
              </span>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg sm:leading-7">
              A powerful, flexible and customizable React DataTable component with
              modern features and high performance.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <FiZap className="text-blue-500" /> Lightweight
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <FiSliders className="text-blue-500" /> Customizable
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <FiSmartphone className="text-blue-500" /> Responsive
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <span className="font-bold text-[#3178C6]">TS</span> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
                <FiCheck className="text-emerald-500" /> Easy to Use
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 sm:pt-4">
              <a
                href="https://github.com/Shubhamaury1/react-flexi-datatable"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B2144] px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0E2D5C] hover:shadow-lg"
              >
                <FaStar className="text-amber-400 text-sm" />
                <span className="text-white">Star on GitHub</span>
                <span className="rounded-md bg-[#183460] px-2 py-0.5 text-xs text-white">
                  700+
                </span>
              </a>

              <a
                href="https://github.com/Shubhamaury1/react-flexi-datatable#readme"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <span className="text-slate-800">Live Demo</span>
                <FiExternalLink className="text-slate-600" />
              </a>
            </div>
          </motion.div>

          {/* ================= RIGHT UI MOCKUP DISPLAY ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="relative flex w-full items-center justify-center lg:justify-end"
          >
            <DataTableMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OpenSourceHero;
