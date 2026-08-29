"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import OpenSourceHero from "../Component/OpenSourceHero";
import OpenSourceStats from "../Component/OpenSourceStats";
import OpenSourceFeatures from "../Component/OpenSourceFeatures";

export default function OpenSource() {
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2500);
  };

  return (
    <div className="w-full min-h-screen bg-sky-50 text-slate-800 text-base text-left font-sans pb-20 overflow-x-hidden">
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 bg-[#0F2648] text-white px-5 py-3 rounded-xl shadow-xl border border-sky-500/30 flex items-center gap-2 text-sm font-medium"
          >
            <FiCheck className="text-emerald-400 text-lg" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width Open Source Hero Section with Table Image Preview */}
      <OpenSourceHero />

      {/* Stats and Feature Explorer */}
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 space-y-12 pt-8">
        <OpenSourceStats />
        <OpenSourceFeatures />
      </div>
    </div>
  );
}
