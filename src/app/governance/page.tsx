"use client";
import { useEffect } from "react";
import Delegate from "@/components/Governance/Delegate";
import Hero from "@/components/Governance/Hero";
import RecentVotes from "@/components/Governance/RecentVotes";

export default function page() {
  useEffect(() => {
    // Handle hash navigation on page load
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # symbol

        // Wait for DOM to be ready, with multiple attempts for mobile
        const attemptScroll = (attempts = 0) => {
          const element = document.getElementById(sectionId);
          if (element) {
            // Apply mobile offset (-50px from top on mobile)
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
    };

    // Check hash on mount
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashNavigation);

    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <div>
      <Hero />
      <RecentVotes />
      <Delegate />
    </div>
  );
}
