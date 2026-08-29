"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCloudArrowDown,
  FaStar,
  FaCodeFork,
  FaUsers,
  FaShieldHalved,
} from "react-icons/fa6";

export default function OpenSourceStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl py-6 px-6 sm:px-10 shadow-sm border border-slate-100 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center"
    >
      {/* Stat 1: Downloads */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl">
          <FaCloudArrowDown />
        </div>
        <div className="text-left">
          <div className="text-lg sm:text-xl font-bold text-slate-900">700+</div>
          <div className="text-xs text-slate-500 font-medium">Downloads</div>
        </div>
      </div>

      {/* Stat 2: Stars */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-xl">
          <FaStar />
        </div>
        <div className="text-left">
          <div className="text-lg sm:text-xl font-bold text-slate-900">120+</div>
          <div className="text-xs text-slate-500 font-medium">Stars</div>
        </div>
      </div>

      {/* Stat 3: Forks */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-xl">
          <FaCodeFork />
        </div>
        <div className="text-left">
          <div className="text-lg sm:text-xl font-bold text-slate-900">10+</div>
          <div className="text-xs text-slate-500 font-medium">Forks</div>
        </div>
      </div>

      {/* Stat 4: Contributors */}
      <div className="flex items-center justify-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl">
          <FaUsers />
        </div>
        <div className="text-left">
          <div className="text-lg sm:text-xl font-bold text-slate-900">2+</div>
          <div className="text-xs text-slate-500 font-medium">Contributors</div>
        </div>
      </div>

      {/* Stat 5: License */}
      <div className="flex items-center justify-center gap-3 col-span-2 sm:col-span-1">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-xl">
          <FaShieldHalved />
        </div>
        <div className="text-left">
          <div className="text-lg sm:text-xl font-bold text-slate-900">MIT</div>
          <div className="text-xs text-slate-500 font-medium">License</div>
        </div>
      </div>
    </motion.div>
  );
}
