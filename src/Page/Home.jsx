"use client";

import React from "react";
import HeroSection from "../Component/HeroSection";
import DataAnalyst from "../Component/DataAnalyst.jsx";
import FullStack from "../Component/FullStack.jsx";
import Python from "../Component/Python.jsx";
import TechnicalSkills from "../Component/TechnicalSkills.jsx";

function Home() {
  return (
    <div className="w-full bg-[#edf9fe] overflow-x-hidden">
      <HeroSection />
      <DataAnalyst />
      <FullStack />
      <Python />
      <TechnicalSkills />
    </div>
  );
}

export default Home;
