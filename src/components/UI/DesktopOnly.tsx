"use client";

import { Typography } from "@/components/UI/Typography";
import { useState } from "react";

export default function DesktopOnly() {
  return (
    <div className="md:hidden min-h-screen flex items-center justify-center bg-[#FFFFFF] p-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#1a1a1a] rounded-full flex items-center justify-center border border-[#000000] hover:scale-105 transition-transform">
            <svg
              className="w-10 h-10 text-[#FFFFFF]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-xl border border-[#000000] mb-6 ">
          <Typography
            variant="body1"
            weight="semibold"
            color="white"
            className="mb-2"
          >
            Switch to Desktop
          </Typography>
          <Typography variant="body2" color="white">
            Access from your computer for the complete experience
          </Typography>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-2 text-sm">
            <div className="w-2 h-2 bg-[#1a1a1a] rounded-full"></div>
            <Typography variant="body2" color="primary">
              Mobile version coming soon
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
