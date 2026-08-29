"use client";

import React from "react";
import address from "../assets/address_image.svg";

function Address() {
  return (
    <section className="w-full bg-sky-50 py-16 md:py-24 border-t border-sky-200/50">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* ================= LEFT : ILLUSTRATION ================= */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src={address?.src || address}
              alt="Location and Address Illustration"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain drop-shadow-md"
            />
          </div>

          {/* ================= RIGHT : ADDRESS CONTENT ================= */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-8 flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#092E53] tracking-tight text-center md:text-left">
              Location &amp; Address
            </h2>

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 shadow-xl border border-sky-100/80 w-full max-w-lg lg:max-w-xl text-left space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-3xl sm:text-4xl flex-shrink-0 mt-1">📍</span>
                <div className="space-y-1">
                  <p className="text-gray-900 font-bold text-lg sm:text-xl md:text-2xl">
                    Shahawabad, Nai Bazar
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg font-medium">
                    Bhadohi — 221401
                  </p>
                  <p className="text-gray-600 text-base sm:text-lg font-medium">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/place/SURAJ+HARDWARE+CENTER/@25.4036503,82.5762896,20z/data=!4m14!1m7!3m6!1s0x398fdfe0e9e83ef9:0x3000ca3cf1187d27!2sSURAJ+HARDWARE+CENTER!8m2!3d25.4034843!4d82.5762194!16s%2Fg%2F11fp3tzjnq!3m5!1s0x398fdfe0e9e83ef9:0x3000ca3cf1187d27!8m2!3d25.4034843!4d82.5762194!16s%2Fg%2F11fp3tzjnq?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#0a1b4f] hover:bg-[#09203f] text-white px-8 py-3.5 rounded-2xl text-base sm:text-lg font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all w-full sm:w-auto justify-center"
                >
                  <span>🗺️</span> View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Address;
