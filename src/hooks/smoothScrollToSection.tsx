"use client";

import { useEffect } from "react";

export function smoothScrollToSection(pagePath: string, sectionId: string) {
  if (typeof window === "undefined") return;

  // If we're already on the target page, just scroll to the section
  if (window.location.pathname === pagePath) {
    scrollToSection(sectionId);
    return;
  }

  // Navigate to the page with hash for better mobile compatibility
  // This is more reliable than sessionStorage on mobile devices
  window.location.href = `${pagePath}#${sectionId}`;
}

function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  const element = document.getElementById(sectionId);
  if (element) {
    // Check if mobile (viewport width < 768px, which is md breakpoint in Tailwind)
    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? -50 : 0;

    if (offset !== 0) {
      // Use manual scroll calculation for offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      // Use native scrollIntoView for desktop
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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

    // Check for hash in URL (primary method - more reliable on mobile)
    const hash = window.location.hash;
    if (hash) {
      const sectionIdFromHash = hash.substring(1); // Remove the # symbol

      // Wait for DOM to be ready, with multiple attempts for mobile
      const attemptScroll = (attempts = 0) => {
        const element = document.getElementById(sectionIdFromHash);
        if (element) {
          // Element found, scroll to it with mobile offset
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? -50 : 0;

          if (offset !== 0) {
            // Use manual scroll calculation for offset
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset + offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            // Use native scrollIntoView for desktop
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else if (attempts < 10) {
          // Element not found yet, try again after a short delay
          // This is important for mobile where page load timing can vary
          setTimeout(() => attemptScroll(attempts + 1), 100);
        }
      };

      // Start attempting to scroll after initial delay
      setTimeout(() => attemptScroll(), 300);
    }

    // Fallback: Check sessionStorage (for backward compatibility)
    const sectionId = sessionStorage.getItem("scrollToSection");
    if (sectionId) {
      sessionStorage.removeItem("scrollToSection");

      const attemptScroll = (attempts = 0) => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Apply mobile offset
          const isMobile = window.innerWidth < 768;
          const offset = isMobile ? -50 : 0;

          if (offset !== 0) {
            // Use manual scroll calculation for offset
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset + offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else {
            // Use native scrollIntoView for desktop
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else if (attempts < 10) {
          setTimeout(() => attemptScroll(attempts + 1), 100);
        }
      };

      setTimeout(() => attemptScroll(), 500);
    }
  }, []);
}
