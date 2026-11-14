"use client"

import { useState } from "react"
import MetroHero from "@/components/ui/scroll-locked-video-hero"
import PortfolioMain from "@/components/portfolio-main"

export default function Home() {
  const [introDismissed, setIntroDismissed] = useState(false)
  const [isSlidingOut, setIsSlidingOut] = useState(false)

  const handleCompleteIntro = () => {
    setIsSlidingOut(true)
    setTimeout(() => {
      setIntroDismissed(true)
      if (typeof document !== "undefined") {
        const b = document.body.style
        b.position = ""
        b.top = ""
        b.left = ""
        b.right = ""
        b.width = ""
        b.height = ""
        b.overscrollBehavior = ""
      }
      window.scrollTo(0, 0)
    }, 700)
  }

  return (
    <main className="relative min-h-screen bg-[#05070d] text-[#f2f4f8] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 01. Complete Portfolio: sits cleanly at the top of the page */}
      <PortfolioMain />

      {/* 02. Cinematic Metro Entrance: Fixed full-screen intro portal */}
      {!introDismissed && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isSlidingOut
              ? "-translate-y-full opacity-0 pointer-events-none"
              : "translate-y-0 opacity-100"
          }`}
        >
          <MetroHero
            title="STEP INTO MY WORLD"
            scrollHint="SCROLL TO EXPLORE"
            tagline="Where imagination meets code. Welcome to my universe."
            onComplete={handleCompleteIntro}
          />
        </div>
      )}
    </main>
  )
}
