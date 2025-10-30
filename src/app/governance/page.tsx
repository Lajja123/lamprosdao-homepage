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
      if (hash === "#delegate-section") {
        setTimeout(() => {
          const delegateSection = document.getElementById("delegate-section");
          if (delegateSection) {
            delegateSection.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 100);
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
      {/* <Hero />
      <RecentVotes />
      <Delegate /> */}
    </div>
  );
}
