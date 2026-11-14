"use client"

import { useEffect, useRef, useState } from "react"

// ─────────────────────────────────────────────────────────────
// THE CITY OPENS — locked scroll-scrub video hero
// The page cannot move while this is active — body is pinned
// with position:fixed (the same bulletproof technique modal
// libraries use; plain overflow:hidden alone isn't reliable
// across browsers). Wheel/touch input is captured and used
// purely to drive video.currentTime, forward and backward. Once
// the video reaches the end and the user keeps pushing forward,
// the page unlocks and continues normally — and re-locks if they
// scroll back up into it. No dependencies, system fonts only.
// ─────────────────────────────────────────────────────────────

export interface MetroHeroProps {
  videoSrc?: string
  title?: string
  scrollHint?: string
  tagline?: string
  signature?: { name: string; url: string } | false
  /** Total input distance (px) needed to scrub the full video. Tune to taste. */
  scrubDistance?: number
  className?: string
  style?: React.CSSProperties
  nextSectionId?: string
  onComplete?: () => void
}

const DEFAULT_VIDEO = "/metro.mp4"
const DEFAULT_SIGNATURE = { name: "guglielmogiannattasio.exe", url: "https://www.guglielmogiannattasio.it" }
const SANS = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

const COL_BG = "#05070d"
const COL_TEXT = "#f2f4f8"

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

export default function MetroHero({
  videoSrc = DEFAULT_VIDEO,
  title = "STEP INTO MY WORLD",
  scrollHint = "SCROLL TO ENTER",
  tagline = "Where imagination meets code. Welcome to my universe.",
  signature = false,
  scrubDistance = 3200,
  nextSectionId = "portfolio-main",
  onComplete,
  className,
  style,
}: MetroHeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const progressBarRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)
  const [isAtEnd, setIsAtEnd] = useState(false)
  const isAtEndRef = useRef(false)
  const proceedRef = useRef<() => void>(() => {})

  useEffect(() => {
    const video = videoRef.current
    const section = sectionRef.current
    if (!video || !section) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    let duration = 0
    let rafId = 0
    let targetProgress = 0
    let currentProgress = 0
    let hasStartedScrolling = false
    let isSeeking = false
    let pendingTime: number | null = null
    let locked = false
    let lockedScrollY = 0
    let touchStartY = 0

    // loadedmetadata fires as soon as duration is known — much faster than
    // loadeddata (which needs a decoded frame). We also set a 2 s fallback
    // so the video is never permanently hidden if the event misfires.
    const onLoadedMetadata = () => {
      duration = video.duration || 0
      setReady(true)
      if (reduceMotion) {
        video.currentTime = duration * 0.92
      }
    }
    const onLoadedData = () => {
      duration = video.duration || 0
      setReady(true)
    }
    video.addEventListener("loadedmetadata", onLoadedMetadata)
    video.addEventListener("loadeddata", onLoadedData)

    if (video.readyState >= 1) {
      duration = video.duration || 0
      setReady(true)
      if (reduceMotion) {
        video.currentTime = duration * 0.92
      }
    }

    // Fallback: if metadata somehow never fires, show the video after 1s
    const fallbackTimer = setTimeout(() => setReady(true), 1000)

    video.muted = true
    video.defaultMuted = true

    // kickstartLoad is only needed on iOS Safari which blocks buffering
    // until play() is called. Guard it behind a UA check.
    const isIOS =
      typeof navigator !== "undefined" &&
      /iPad|iPhone|iPod/.test(navigator.userAgent)
    if (isIOS) {
      const kickstartLoad = () => {
        const p = video.play()
        if (p && typeof p.then === "function") {
          p.then(() => video.pause()).catch(() => {})
        } else {
          video.pause()
        }
      }
      kickstartLoad()
    }

    const onSeeked = () => {
      if (!video) return
      if (pendingTime !== null) {
        const nextTime = pendingTime
        pendingTime = null
        if (Math.abs(video.currentTime - nextTime) > 0.02) {
          video.currentTime = nextTime
        }
      }
    }
    video.addEventListener("seeked", onSeeked)

    const seekTo = (t: number) => {
      if (!video) return
      if (Math.abs(video.currentTime - t) < 0.015) return
      if (video.seeking) {
        pendingTime = t
        return
      }
      video.currentTime = t
    }

    function engageLock() {
      if (locked || typeof document === "undefined") return
      locked = true
      lockedScrollY = window.scrollY
      const b = document.body.style
      b.position = "fixed"
      b.top = `-${lockedScrollY}px`
      b.left = "0"
      b.right = "0"
      b.width = "100%"
      b.height = "100%"
      b.overscrollBehavior = "none"
    }

    function releaseLock() {
      if (!locked || typeof document === "undefined") return
      locked = false
      const y = lockedScrollY
      const b = document.body.style
      b.position = ""
      b.top = ""
      b.left = ""
      b.right = ""
      b.width = ""
      b.height = ""
      b.overscrollBehavior = ""
      window.scrollTo(0, y)
    }

    engageLock()

    let isTransitioning = false
    const proceedToPortfolio = () => {
      if (isTransitioning) return
      isTransitioning = true
      releaseLock()
      if (onComplete) {
        onComplete()
      } else {
        const nextEl = document.getElementById(nextSectionId)
        if (nextEl) {
          nextEl.scrollIntoView({ behavior: "smooth" })
        }
      }
      setTimeout(() => {
        isTransitioning = false
      }, 800)
    }
    proceedRef.current = proceedToPortfolio

    function addDelta(deltaY: number) {
      const next = clamp(targetProgress + deltaY / scrubDistance, 0, 1)
      targetProgress = next
      if (targetProgress > 0.001) hasStartedScrolling = true
      return true
    }

    const onWheel = (e: WheelEvent) => {
      if (locked) {
        // Scroll only scrubs the video and stops at the end.
        // Transition to main page only triggers on hovering Explore Portfolio button.
        let delta = e.deltaY
        if (e.deltaMode === 1) delta *= 32 // line mode
        else if (e.deltaMode === 2) delta *= 320 // page mode
        if (Math.abs(delta) > 50) {
          delta = Math.sign(delta) * (50 + Math.pow(Math.abs(delta) - 50, 0.85))
        }
        addDelta(delta)
        e.preventDefault()
      } else {
        // When unlocked: if user scrolls back to the very top and scrolls upward, re-engage hero
        if (window.scrollY <= 5 && e.deltaY < -15) {
          engageLock()
          addDelta(e.deltaY)
          e.preventDefault()
        }
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0]?.clientY ?? 0
    }
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0]?.clientY ?? touchStartY
      const deltaY = touchStartY - y
      touchStartY = y

      if (locked) {
        addDelta(deltaY * 1.2)
        e.preventDefault()
      } else {
        if (window.scrollY <= 5 && deltaY < -20) {
          engageLock()
          addDelta(deltaY)
          e.preventDefault()
        }
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    section.addEventListener("touchstart", onTouchStart, { passive: true, capture: true })
    section.addEventListener("touchmove", onTouchMove, { passive: false, capture: true })

    function frame() {
      // Smooth damped lerp with momentum:
      const diff = targetProgress - currentProgress
      if (Math.abs(diff) < 0.0001) {
        currentProgress = targetProgress
      } else {
        currentProgress += diff * 0.085
      }

      const atEnd = currentProgress >= 0.88
      if (atEnd !== isAtEndRef.current) {
        isAtEndRef.current = atEnd
        setIsAtEnd(atEnd)
      }

      if (duration > 0) {
        seekTo(currentProgress * duration)
      }

      if (videoRef.current) {
        const scale = 1 + currentProgress * 0.06
        videoRef.current.style.transform = `translate3d(0, 0, 0) scale(${scale})`
      }
      if (titleRef.current) {
        const t = 1 - clamp(currentProgress / 0.35, 0, 1)
        titleRef.current.style.opacity = String(t)
        titleRef.current.style.transform = `translate3d(0, ${(1 - t) * -24}px, 0) scale(${0.96 + t * 0.04})`
        const blurAmount = (1 - t) * 10
        titleRef.current.style.filter = blurAmount > 0.2 ? `blur(${blurAmount}px)` : "none"
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = hasStartedScrolling ? "0" : "1"
      }
      if (taglineRef.current) {
        // Appears earlier: begins at 0.46 (as metro doors part open) and reaches full clarity by 0.76
        const t = clamp((currentProgress - 0.46) / 0.30, 0, 1)
        taglineRef.current.style.opacity = String(t)
        // 3D forward spatial push through the parting doors + depth float
        const scale = 0.85 + t * 0.15
        const translateY = (1 - t) * 32
        taglineRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`
        const blurAmount = (1 - t) * 12
        taglineRef.current.style.filter = blurAmount > 0.2 ? `blur(${blurAmount}px)` : "none"
      }
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${currentProgress})`
      }

      rafId = requestAnimationFrame(frame)
    }

    if (!reduceMotion) {
      rafId = requestAnimationFrame(frame)
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata)
      video.removeEventListener("loadeddata", onLoadedData)
      clearTimeout(fallbackTimer)
      video.removeEventListener("seeked", onSeeked)
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      section.removeEventListener("touchstart", onTouchStart, true)
      section.removeEventListener("touchmove", onTouchMove, true)
      cancelAnimationFrame(rafId)
      releaseLock()
    }
  }, [scrubDistance])

  return (
    <div
      ref={sectionRef}
      className={className}
      style={{
        position: "relative",
        height: "100dvh",
        width: "100%",
        overflow: "hidden",
        background: COL_BG,
        touchAction: "none",
        ...style,
      }}
    >
      <video
        ref={videoRef}
        src={videoSrc}
        muted
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: ready ? 1 : 0,
          transformOrigin: "center center",
          willChange: "transform",
          transition: "opacity 0.6s ease",
          touchAction: "none",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(5,7,13,0.35), rgba(5,7,13,0) 30%, rgba(5,7,13,0.15) 70%, rgba(5,7,13,0.55))",
          pointerEvents: "none",
        }}
      />

      <div
        ref={titleRef}
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 6%",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontWeight: 800,
            fontSize: "clamp(24px, 4.5vw, 56px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: COL_TEXT,
            textShadow: "0 4px 30px rgba(0,0,0,0.5)",
            display: "inline-block",
            willChange: "transform, filter, opacity",
          }}
        >
          {title}
        </span>
      </div>

      {tagline && (
        <div
          ref={taglineRef}
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8%",
            textAlign: "center",
            opacity: 0,
            pointerEvents: "none",
            transformOrigin: "center center",
          }}
        >
          {/* Ambient glowing radial aura behind the tagline */}
          <div
            style={{
              position: "absolute",
              width: "clamp(280px, 60vw, 750px)",
              height: "220px",
              background: "radial-gradient(ellipse at center, rgba(34, 211, 238, 0.25) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 75%)",
              filter: "blur(40px)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Elevated Cinematic Tagline Typography */}
          <div style={{ position: "relative", zIndex: 1, maxWidth: "960px" }}>
            <span
              style={{
                fontFamily: SANS,
                fontWeight: 800,
                fontSize: "clamp(24px, 4.2vw, 52px)",
                lineHeight: 1.25,
                letterSpacing: "-0.015em",
                color: COL_TEXT,
                textShadow: "0 4px 30px rgba(0,0,0,0.85), 0 0 45px rgba(34, 211, 238, 0.35)",
                display: "block",
              }}
            >
              {tagline.includes(".") ? (
                <>
                  <span style={{ display: "block", opacity: 0.98 }}>
                    {tagline.split(".")[0]}.
                  </span>
                  <span
                    style={{
                      display: "block",
                      marginTop: "10px",
                      background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      textShadow: "0 0 35px rgba(56, 189, 248, 0.55)",
                    }}
                  >
                    {tagline.split(".").slice(1).join(".").trim()}
                  </span>
                </>
              ) : (
                tagline
              )}
            </span>

            {/* Futuristic glowing horizon line */}
            <div
              style={{
                margin: "24px auto 0",
                height: "2px",
                width: "140px",
                background: "linear-gradient(90deg, transparent, #38bdf8, #818cf8, transparent)",
                boxShadow: "0 0 18px #38bdf8",
                borderRadius: "9999px",
              }}
            />
          </div>
        </div>
      )}

      <div
        ref={hintRef}
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(20px, 6vh, 48px)",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "rgba(240,244,248,0.75)",
          fontFamily: SANS,
          fontSize: "clamp(10px, 1.4vw, 12px)",
          fontWeight: 600,
          letterSpacing: "0.3em",
          transition: "opacity 0.4s ease",
          pointerEvents: "none",
        }}
      >
        <span>{scrollHint}</span>
        <svg width="14" height="18" viewBox="0 0 14 18" style={{ animation: "metro-hero-bounce 1.6s ease-in-out infinite" }}>
          <style>{`
            @keyframes metro-hero-bounce {
              0%, 100% { transform: translateY(0); opacity: 0.5; }
              50% { transform: translateY(5px); opacity: 1; }
            }
          `}</style>
          <path d="M7 1 L7 17 M2 12 L7 17 L12 12" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Floating Explore Portfolio button: hover triggers the main page */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "clamp(24px, 5vh, 48px)",
          transform: "translateX(-50%)",
          zIndex: 10,
          opacity: isAtEnd ? 1 : 0,
          pointerEvents: isAtEnd ? "auto" : "none",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <button
          type="button"
          onClick={() => {
            proceedRef.current()
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(34, 211, 238, 0.28)"
            e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.85)"
            e.currentTarget.style.boxShadow = "0 0 35px rgba(34, 211, 238, 0.65), 0 10px 30px rgba(0,0,0,0.8)"
            e.currentTarget.style.transform = "scale(1.08)"
            // Hover opens the main page!
            proceedRef.current()
          }}
          onTouchStart={() => {
            proceedRef.current()
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "13px 28px",
            borderRadius: "9999px",
            backgroundColor: "rgba(255, 255, 255, 0.12)",
            border: "1px solid rgba(34, 211, 238, 0.4)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            color: "#ffffff",
            fontFamily: SANS,
            fontSize: "12px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 24px rgba(34, 211, 238, 0.35)",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)"
            e.currentTarget.style.borderColor = "rgba(34, 211, 238, 0.4)"
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.7), 0 0 24px rgba(34, 211, 238, 0.35)"
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
              style={{
                display: "inline-block",
                width: "7px",
                height: "7px",
                borderRadius: "9999px",
                backgroundColor: "#22d3ee",
                boxShadow: "0 0 8px #22d3ee",
              }}
            />
            Explore Portfolio
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ animation: "metro-hero-bounce 1.6s ease-in-out infinite" }}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          background: "rgba(255,255,255,0.12)",
        }}
      >
        <div
          ref={progressBarRef}
          style={{
            height: "100%",
            width: "100%",
            background: "linear-gradient(90deg, rgba(255,255,255,0.5), rgba(255,255,255,0.95))",
            transform: "scaleX(0)",
            transformOrigin: "left center",
          }}
        />
      </div>

      {signature && (
        <span
          style={{
            position: "absolute",
            right: "clamp(12px, 2.5vw, 24px)",
            bottom: "clamp(10px, 2vw, 18px)",
            fontFamily: SANS,
            fontWeight: 500,
            fontSize: "clamp(11px, 1.4vw, 13px)",
            letterSpacing: "0.01em",
            color: "rgba(220,224,232,0.6)",
            zIndex: 2,
          }}
        >
          by{" "}
          <a
            href={signature.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(220,224,232,0.6)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = COL_TEXT
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = "rgba(220,224,232,0.6)"
            }}
          >
            {signature.name}
          </a>
        </span>
      )}
    </div>
  )
}
