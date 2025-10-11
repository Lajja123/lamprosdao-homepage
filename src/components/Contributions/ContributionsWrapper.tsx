"use client";
import { useState } from "react";
import Hero from "./Hero";
import Reports from "./Reports";

export default function ContributionsWrapper() {
  const [activeChain, setActiveChain] = useState<"arbitrum" | "optimism">(
    "arbitrum"
  );

  return (
    <>
      <Hero activeChain={activeChain} onChainChange={setActiveChain} />
      <Reports activeChain={activeChain} />
    </>
  );
}
