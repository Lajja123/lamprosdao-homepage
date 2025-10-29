"use client";

import { useEffect } from "react";

export function smoothScrollToSection(pagePath: string, sectionId: string) {
  // If we're already on the target page, just scroll to the section
  if (typeof window !== "undefined" && window.location.pathname === pagePath) {
    scrollToSection(sectionId);
    return;
  }

  // If we need to navigate to a different page, use Next.js router
  if (typeof window !== "undefined") {
    // Store the section ID in sessionStorage for after navigation
    sessionStorage.setItem("scrollToSection", sectionId);

    // Navigate to the page
    window.location.href = pagePath;
  }
}

function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Alternative approach using URL hash for better browser compatibility
export function smoothScrollToSectionWithHash(
  pagePath: string,
  sectionId: string
) {
  if (typeof window === "undefined") return;

  // If we're already on the target page, just scroll to the section
  if (window.location.pathname === pagePath) {
    scrollToSection(sectionId);
    return;
  }

  // Navigate to the page with hash
  window.location.href = `${pagePath}#${sectionId}`;
}

// Hook for handling smooth scroll on page load
export function useSmoothScrollOnLoad() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if there's a section to scroll to from sessionStorage
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      // Clear the stored section ID
      sessionStorage.removeItem("scrollToSection");

      // Wait for the page to fully load, then scroll
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    }

    // Also check for hash in URL
    const hash = window.location.hash;
    if (hash) {
      const sectionIdFromHash = hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        scrollToSection(sectionIdFromHash);
      }, 300);
    }
  }, []);
}
