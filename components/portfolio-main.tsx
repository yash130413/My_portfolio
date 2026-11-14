"use client"

import React, { useState, useEffect } from "react"
import {
  ArrowUpRight,
  ArrowRight,
  Mail,
  Copy,
  Check,
  ArrowUp,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ExternalLink,
  Code2,
  Terminal,
  Activity,
  Calendar,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  GraduationCap,
} from "lucide-react"

// Social / Brand Icons
function GithubIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface Project {
  number: string
  title: string
  subtitle: string
  category: string
  metric: string
  metricLabel: string
  description: string
  highlights: string[]
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl: string
}

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Ledgerly",
    subtitle: "AI Spend Optimization Platform",
    category: "Full-Stack • Rule Audit Engine",
    metric: "13-Check",
    metricLabel: "Audit engine flagging redundant AI costs",
    description:
      "A full-stack AI spend optimization platform enabling engineering & finance teams to audit spend across 5 AI providers and share finance-ready audit reports with zero login friction.",
    highlights: [
      "Engineered a 13-check audit engine that flags underused and overlapping subscriptions.",
      "Ranks recommendations dynamically by estimated annual savings and cost efficiencies.",
      "Instant report sharing with zero login friction for finance workflows.",
    ],
    tags: ["Next.js", "NestJS", "TypeScript", "Supabase", "Rule Engine", "Tailwind CSS"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://ledgerly-93.vercel.app/",
    githubUrl: "https://github.com/yash130413/Ledgerly",
  },
  {
    number: "02",
    title: "PharmaConnect",
    subtitle: "B2B Pharmaceutical Marketplace",
    category: "Full-Stack • Cloud Deployed",
    metric: "-28%",
    metricLabel: "Redundant query reduction via indexed Mongo APIs",
    description:
      "A production-grade B2B marketplace covering secure pharmaceutical product listings, batch ordering, real-time messaging, and high-concurrency order routing.",
    highlights: [
      "Optimized MongoDB indexing and REST APIs, reducing redundant queries by ~25–30%.",
      "Deployed full backend on AWS EC2 behind an Nginx reverse proxy with SSL certification.",
      "Engineered robust role-based access control and order lifecycle states.",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS EC2", "Nginx", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    liveUrl: "https://pharmaconnect1.vercel.app/",
    githubUrl: "https://github.com/yash130413/PharmaConnect-1",
  },
  {
    number: "03",
    title: "GeoSight",
    subtitle: "Automated Geospatial Intelligence Platform",
    category: "GIS • Satellite Analytics",
    metric: "5 States",
    metricLabel: "Automated land cover classification across India",
    description:
      "An automated geospatial intelligence system for land cover classification and road connectivity analysis across 5 Indian states, powered by satellite imagery processing.",
    highlights: [
      "Integrated Google Earth Engine for real-time remote-sensing and geospatial data pipelines.",
      "Interactive map visualizer built in React.js and Leaflet with dynamic layers and markers.",
      "Developed high-throughput Flask REST APIs optimizing geospatial tile fetching.",
    ],
    tags: ["React.js", "Leaflet", "Flask (Python)", "Google Earth Engine", "GIS", "REST APIs"],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/yash130413/GEOSIGHT",
  },
]

const DISCIPLINES = [
  {
    step: "01",
    name: "Architect & Model",
    tagline: "Systems Design & Data Modeling",
    description:
      "Schema design, relational/document database optimization, microservice boundaries, and caching strategies (Redis, PostgreSQL, MongoDB).",
  },
  {
    step: "02",
    name: "Engineering & APIs",
    tagline: "High-Throughput Full-Stack",
    description:
      "RESTful and real-time backend systems built with Node.js, Express, NestJS, and Next.js App Router with strict TypeScript verification.",
  },
  {
    step: "03",
    name: "High-Speed Interfaces",
    tagline: "Micro-Interactions & Modern UI",
    description:
      "Pixel-perfection with Tailwind CSS, React, Framer motion principles, accessibility, and zero-jank responsive viewports.",
  },
  {
    step: "04",
    name: "Cloud & Reliability",
    tagline: "AWS EC2, Nginx & DevOps",
    description:
      "Production deployment pipelines, SSL hardening, reverse proxies, environment segregation, and 99.9% uptime architectures.",
  },
]

const SKILLS_MATRIX = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "Python", "C++", "SQL", "HTML5/CSS3"],
  },
  {
    category: "Frameworks & Frontend",
    items: ["Next.js (App Router)", "React.js", "Tailwind CSS", "Redux Toolkit", "Leaflet", "Shadcn UI"],
  },
  {
    category: "Backend & Systems",
    items: ["Node.js", "Express.js", "NestJS", "Flask", "REST APIs", "Socket.IO", "Redis"],
  },
  {
    category: "Databases & Cloud",
    items: ["MongoDB", "PostgreSQL", "Supabase", "AWS (EC2, S3)", "Nginx Reverse Proxy", "Docker", "Git/GitHub"],
  },
]

export default function PortfolioMain() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("all")
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const workContainerRef = React.useRef<HTMLDivElement>(null)

  const email = "yashrohilla1204@gmail.com"
  const phone = "+91 9354139378"

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (workContainerRef.current) {
            const rect = workContainerRef.current.getBoundingClientRect()
            const totalScrollable = workContainerRef.current.offsetHeight - window.innerHeight
            if (totalScrollable > 0) {
              const currentScroll = -rect.top
              const rawProgress = Math.min(Math.max(currentScroll / totalScrollable, 0), 0.999)
              setScrollProgress(rawProgress)
              
              const numProjects = PROJECTS.length
              const step = 1 / numProjects
              const idx = Math.min(Math.floor(rawProgress / step), numProjects - 1)
              setActiveProjectIndex(idx)
            }
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div id="portfolio-main" className="relative min-h-screen bg-[#080708] text-[#edf5fc] font-sans antialiased selection:bg-[#2176ff] selection:text-white">
      {/* Editorial Grain Overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle Halden Sky Light Ambience */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[25vw] left-[15vw] h-[55vw] w-[55vw] rounded-full bg-gradient-to-br from-[#2176ff]/10 via-[#5c9bff]/5 to-transparent blur-[140px]" />
        <div className="absolute top-[45vh] right-[-10vw] h-[45vw] w-[45vw] rounded-full bg-gradient-to-bl from-[#2176ff]/8 via-transparent to-transparent blur-[160px]" />
      </div>

      {/* Halden Floating Header with Capsule Navigation */}
      <header className="fixed inset-x-0 top-0 z-40 transition-all duration-500 bg-[#080708]/75 backdrop-blur-md border-b border-white/[0.06]">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 sm:px-10">
          {/* Studio Brandmark */}
          <a
            href="#portfolio-main"
            className="group flex items-baseline gap-1 font-display text-2xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-90"
          >
            <span>Yash Rohilla</span>
            <span className="text-[10px] font-mono font-medium text-[#2176ff]">®</span>
          </a>

          {/* Scandinavian Center Capsule Dock */}
          <nav className="hidden items-center rounded-full border border-white/10 bg-[#121113]/90 p-1.5 shadow-2xl backdrop-blur-xl md:flex">
            <a
              href="#about"
              className="rounded-full px-5 py-2 font-heading text-xs font-medium tracking-wide text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              About
            </a>
            <a
              href="#work"
              className="rounded-full px-5 py-2 font-heading text-xs font-medium tracking-wide text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              Work
            </a>
            <a
              href="#education"
              className="rounded-full px-5 py-2 font-heading text-xs font-medium tracking-wide text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              Education
            </a>
            <a
              href="#services"
              className="rounded-full px-5 py-2 font-heading text-xs font-medium tracking-wide text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              Disciplines
            </a>
            <a
              href="#skills"
              className="rounded-full px-5 py-2 font-heading text-xs font-medium tracking-wide text-white/70 transition-all hover:bg-white/10 hover:text-white"
            >
              Capabilities
            </a>
          </nav>

          {/* Right Header Actions: Time Indicator & CTA */}
          <div className="flex items-center gap-3.5">
            {/* Live Clock / Location Tag */}
            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] text-white/60 lg:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span>DELHI NCR {currentTime || "03:45 PM"}</span>
            </div>

            {/* Let's Talk Magnetic Halden Capsule Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#edf5fc] px-5 py-2.5 font-heading text-xs font-bold text-[#080708] transition-all hover:bg-[#2176ff] hover:text-white hover:shadow-[0_0_25px_rgba(33,118,255,0.45)]"
            >
              <span className="flex items-center gap-2">
                <span>Let&apos;s Connect</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 pt-[110px]">
        {/* Halden Massive Statement Hero Section */}
        <section className="relative px-6 py-16 sm:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* Top Eyebrow Metadata Grid */}
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 font-mono text-xs uppercase tracking-widest text-[#9a9a9a]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#2176ff]" />
                <span>Full-Stack Engineer &amp; Software Builder</span>
              </div>
              <div className="flex items-center">
                <span className="text-emerald-400 font-semibold">● Open for Roles</span>
              </div>
            </div>

            {/* Halden Iconic Headline */}
            <div className="my-8">
              <h1 className="font-display text-[11vw] font-extrabold uppercase leading-[0.92] tracking-tighter text-white sm:text-[9.2vw] lg:text-[7.2vw]">
                <span>I Build Systems</span>
                <br />
                <span className="text-white/40">People </span>
                <span className="bg-gradient-to-r from-[#2176ff] via-[#5c9bff] to-white bg-clip-text text-transparent">
                  Rely On.
                </span>
              </h1>
            </div>

            {/* Lower Hero Split: Manifesto & Core Metrics */}
            <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-6">
                <p className="font-sans text-xl leading-relaxed font-light text-[#edf5fc]/85 sm:text-2xl">
                  Engineering high-concurrency web systems, real-time architectures, and frictionless digital products.
                  Bridging disciplined system design with speed, resilience, and micro-interaction polish.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#work"
                    className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 font-heading text-sm font-bold text-black transition-all hover:bg-[#2176ff] hover:text-white hover:shadow-[0_0_30px_rgba(33,118,255,0.4)]"
                  >
                    <span>Explore Selected Work</span>
                    <ArrowDownIcon className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3.5 font-mono text-xs font-medium text-white/90 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-white/50" />
                        <span>{email}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Halden Stat Numbers */}
              <div className="flex flex-wrap items-center gap-6 lg:col-span-6 lg:justify-end xl:gap-8">
                <div className="border-l border-white/15 pl-4 pr-2">
                  <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">8.22</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#9a9a9a]">
                    CGPA • Bennett
                  </div>
                </div>
                <div className="border-l border-white/15 pl-4 pr-2">
                  <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#2176ff]">300+</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#9a9a9a]">
                    DSA Solved
                  </div>
                </div>
                <div className="border-l border-white/15 pl-4 pr-2">
                  <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">03</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#9a9a9a]">
                    Flagship Builds
                  </div>
                </div>
                <div className="border-l border-white/15 pl-4 pr-2">
                  <div className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-emerald-400">99.9%</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[#9a9a9a]">
                    Cloud Uptime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section (Scroll-Driven Vertical Pin to Fade / Slide Transition) */}
        <section
          id="work"
          ref={workContainerRef}
          className="relative border-t border-white/10"
          style={{ height: `${PROJECTS.length * 160}vh` }}
        >
          {/* Sticky Container pinned during vertical scrolling */}
          <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-6 py-6 sm:px-10 lg:py-8">
            <div className="mx-auto w-full max-w-7xl flex flex-col max-h-[92vh]">
              {/* Header & Slide Counter */}
              <div className="mb-4 flex shrink-0 flex-col justify-between gap-3 border-b border-white/10 pb-4 sm:flex-row sm:items-end">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#2176ff]">
                    // 01. Portfolio Index
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white">
                    Selected <span className="text-[#2176ff]">Work</span>
                  </h2>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {PROJECTS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          if (!workContainerRef.current) return
                          const sectionTop = workContainerRef.current.offsetTop
                          const step = (workContainerRef.current.offsetHeight - window.innerHeight) / PROJECTS.length
                          window.scrollTo({ top: sectionTop + i * step + 10, behavior: "smooth" })
                        }}
                        className={`h-2 transition-all duration-500 rounded-full ${
                          activeProjectIndex === i
                            ? "w-10 bg-[#2176ff] shadow-[0_0_12px_#2176ff]"
                            : "w-2.5 bg-white/20 hover:bg-white/40"
                        }`}
                        aria-label={`Go to project ${i + 1}`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-white/50">
                    0{activeProjectIndex + 1} / 0{PROJECTS.length}
                  </span>
                </div>
              </div>

              {/* Stack of Cards with Futuristic Studio UI & Micro-Animations */}
              <div className="relative flex-1 min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] w-full">
                {PROJECTS.map((proj, idx) => {
                  const isActive = activeProjectIndex === idx
                  const isPast = activeProjectIndex > idx

                  // Continuous parallax offset based on scroll progress
                  const projectProgress = (scrollProgress * PROJECTS.length) - idx
                  // -1 (entering) to 0 (focused) to +1 (exiting)
                  const clampedOffset = Math.max(-1, Math.min(1, projectProgress))
                  const parallaxImageY = clampedOffset * -30
                  const parallaxTextY = clampedOffset * -12

                  return (
                    <article
                      key={proj.title}
                      className={`group absolute inset-0 overflow-hidden rounded-3xl border bg-[#0a090c]/95 shadow-2xl backdrop-blur-2xl transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isActive
                          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto border-[#2176ff]/70 shadow-[0_0_80px_rgba(33,118,255,0.25)] ring-1 ring-[#2176ff]/30 z-20"
                          : isPast
                          ? "opacity-0 -translate-y-20 scale-[0.92] pointer-events-none border-white/5 z-10"
                          : "opacity-0 translate-y-20 scale-[0.92] pointer-events-none border-white/5 z-0"
                      }`}
                    >
                      {/* Interactive Neon Scanner Line (animates across top border of active card) */}
                      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#2176ff] to-transparent opacity-80" />

                      <div className="grid h-full lg:grid-cols-12 min-h-full">
                        {/* Project Visual / Mockup with Interactive HUD overlays */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-black/80 lg:aspect-auto lg:col-span-7 h-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={proj.image}
                            alt={proj.title}
                            style={{
                              transform: `translate3d(0, ${parallaxImageY}px, 0) scale(1.08)`,
                              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                            className="h-full w-full object-cover will-change-transform transition-all duration-700 filter brightness-95 contrast-105 group-hover:scale-115 group-hover:brightness-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#0a090c] via-black/30 to-transparent opacity-90" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a090c]/80 hidden lg:block" />

                          {/* Futuristic Corner Badge & Live Ping */}
                          <div
                            style={{
                              transform: `translate3d(0, ${parallaxTextY * 0.8}px, 0)`,
                            }}
                            className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-3 transition-transform duration-300"
                          >
                            <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-xl">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-[#2176ff] shadow-[0_0_8px_#2176ff]" />
                              <span>PROJECT {proj.number}</span>
                            </span>
                            <span className="font-mono text-xs text-white/40">/ 0{PROJECTS.length}</span>
                          </div>

                          {/* Live Metric HUD Card with Glowing Indicator */}
                          <div
                            style={{
                              transform: `translate3d(0, ${parallaxTextY * 0.5}px, 0)`,
                            }}
                            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border border-white/20 bg-[#0e0d11]/90 p-3 sm:p-4 backdrop-blur-2xl shadow-2xl transition-all duration-300 group-hover:border-[#2176ff]/60 group-hover:shadow-[0_0_30px_rgba(33,118,255,0.3)]"
                          >
                            <div className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-white/50">
                              <Activity className="h-3 w-3 text-[#2176ff]" />
                              <span>BENCHMARK METRIC</span>
                            </div>
                            <div className="mt-0.5 font-display text-2xl sm:text-3xl font-extrabold text-[#2176ff] tracking-tight">
                              {proj.metric}
                            </div>
                            <div className="mt-0.5 font-mono text-[10px] sm:text-[11px] text-white/80 max-w-[240px] leading-snug">
                              {proj.metricLabel}
                            </div>
                          </div>
                        </div>

                        {/* Project Information Panel with Staggered Hierarchy */}
                        <div
                          style={{
                            transform: `translate3d(0, ${parallaxTextY}px, 0)`,
                          }}
                          className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 lg:col-span-5 transition-transform duration-300 overflow-y-auto"
                        >
                          <div>
                            {/* Category pill */}
                            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#2176ff]/30 bg-[#2176ff]/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#5c9bff]">
                              <Sparkles className="h-3 w-3 text-[#2176ff]" />
                              <span>{proj.category}</span>
                            </div>

                            <h3 className="mt-2.5 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white group-hover:text-[#edf5fc] transition-colors">
                              {proj.title}
                            </h3>
                            <p className="mt-0.5 font-heading text-xs sm:text-sm font-semibold text-white/70">
                              {proj.subtitle}
                            </p>

                            <p className="mt-3 font-sans text-xs leading-relaxed text-[#9a9a9a]">
                              {proj.description}
                            </p>

                            {/* Architectural Highlights */}
                            <div className="mt-4 space-y-2">
                              {proj.highlights.map((h, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-2 transition-colors hover:border-white/10 hover:bg-white/[0.04]"
                                >
                                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#2176ff]" />
                                  <span className="font-sans text-[11.5px] text-white/85 leading-snug">{h}</span>
                                </div>
                              ))}
                            </div>

                            {/* Tech Stack Pills with Glow */}
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {proj.tags.map((t) => (
                                <span
                                  key={t}
                                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-0.5 font-mono text-[10px] text-white/75 transition-all hover:border-[#2176ff]/50 hover:bg-[#2176ff]/10 hover:text-white"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Action Links */}
                          <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-white/10 pt-4">
                            {proj.liveUrl && (
                              <a
                                href={proj.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#edf5fc] px-5 py-2 font-heading text-xs font-bold text-black transition-all hover:bg-[#2176ff] hover:text-white hover:shadow-[0_0_25px_rgba(33,118,255,0.45)] hover:scale-105"
                              >
                                <span>Live Demo</span>
                                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                              </a>
                            )}

                            <a
                              href={proj.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 font-mono text-xs text-white/90 transition-all hover:border-white/40 hover:bg-white/10 hover:scale-105"
                            >
                              <GithubIcon className="h-3.5 w-3.5" />
                              <span>Source Code</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Academic History Section */}
        <section id="education" className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#2176ff]">
                  // 02. Academic Background
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
                  Education &amp; <br />
                  <span className="text-[#2176ff]">Foundation</span>
                </h2>
                <p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-[#9a9a9a]">
                  Rigorous computer science curriculum, data structures &amp; algorithms foundation, and high academic performance.
                </p>

                {/* Quick Academic Metrics */}
                <div className="mt-10 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-[#0e0d0f] p-5">
                    <div className="font-mono text-[10px] uppercase text-[#9a9a9a]">Undergraduate CGPA</div>
                    <div className="mt-1 font-display text-3xl font-extrabold text-emerald-400">8.22</div>
                    <div className="mt-1 font-mono text-[10px] text-white/50">Bennett University</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-[#0e0d0f] p-5">
                    <div className="font-mono text-[10px] uppercase text-[#9a9a9a]">Class XII Score</div>
                    <div className="mt-1 font-display text-3xl font-extrabold text-[#2176ff]">80%</div>
                    <div className="mt-1 font-mono text-[10px] text-white/50">CBSE Board</div>
                  </div>
                </div>
              </div>

              {/* Education Cards */}
              <div className="space-y-6 lg:col-span-7">
                {/* Bennett University */}
                <div className="rounded-3xl border border-white/10 bg-[#0e0d0f] p-8 transition-all hover:border-[#2176ff]/50">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <div className="font-mono text-[11px] text-[#2176ff] uppercase tracking-wider">Undergraduate Degree</div>
                      <h3 className="mt-1 font-display text-2xl font-bold text-white">Bennett University</h3>
                      <div className="font-heading text-sm text-white/80">B.Tech in Computer Science &amp; Engineering</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs font-semibold text-emerald-400">CGPA: 8.22</div>
                      <div className="font-mono text-xs text-[#9a9a9a]">2024 – 2028</div>
                    </div>
                  </div>

                  <p className="mt-6 font-sans text-sm leading-relaxed text-[#9a9a9a]">
                    Core coursework: Data Structures &amp; Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Full-Stack Engineering.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Data Structures", "Algorithms", "System Design", "Cloud Systems", "Web Engineering"].map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[10px] text-white/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* S D Memorial Senior Secondary School */}
                <div className="rounded-3xl border border-white/10 bg-[#0e0d0f] p-8 transition-all hover:border-white/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <div className="font-mono text-[11px] text-[#2176ff] uppercase tracking-wider">High School</div>
                      <h3 className="mt-1 font-display text-xl font-bold text-white">S D Memorial Senior Secondary School, Haryana</h3>
                      <div className="font-heading text-sm text-white/80">CBSE Higher Secondary Education</div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs font-semibold text-emerald-400">Grade: 80%</div>
                      <div className="font-mono text-xs text-[#9a9a9a]">CBSE Board</div>
                    </div>
                  </div>
                  <p className="mt-4 font-sans text-xs leading-relaxed text-[#9a9a9a]">
                    Specialized in Physics, Chemistry, and Advanced Mathematics with focus on science and analytical problem solving.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work / Disciplines Section (Halden "Our Services") */}
        <section id="services" className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16">
              <span className="font-mono text-xs uppercase tracking-widest text-[#2176ff]">
                // 03. Engineering Philosophy
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
                How I <span className="text-[#2176ff]">Build Systems</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {DISCIPLINES.map((d) => (
                <div
                  key={d.step}
                  className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0e0d0f] p-8 transition-all duration-300 hover:border-[#2176ff]/60 hover:bg-[#121114]"
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-[#2176ff]">{d.step}</div>
                    <h3 className="mt-4 font-display text-xl font-bold text-white group-hover:text-[#2176ff] transition-colors">
                      {d.name}
                    </h3>
                    <div className="mt-1 font-mono text-[11px] text-[#9a9a9a]">{d.tagline}</div>
                    <p className="mt-4 font-sans text-xs leading-relaxed text-[#9a9a9a]">
                      {d.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-white/40 group-hover:text-white transition-colors">
                      <span>Strict Verification</span>
                      <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities / Skills Matrix (Halden Grid) */}
        <section id="skills" className="relative border-t border-white/10 px-6 py-24 sm:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#2176ff]">
                  // 04. Technical Arsenal
                </span>
                <h2 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
                  Skills &amp; <span className="text-[#2176ff]">Capabilities</span>
                </h2>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/80">
                <Terminal className="h-3.5 w-3.5 text-[#2176ff]" />
                <span>300+ LeetCode &amp; GFG Problems Mastered</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {SKILLS_MATRIX.map((s) => (
                <div
                  key={s.category}
                  className="rounded-3xl border border-white/10 bg-[#0e0d0f] p-8"
                >
                  <div className="font-display text-lg font-bold text-white border-b border-white/10 pb-4">
                    {s.category}
                  </div>
                  <ul className="mt-6 space-y-3 font-mono text-xs text-white/80">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2176ff]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outro Transition / Kinetic Infinite Horizon Marquee */}
        <div className="relative overflow-hidden border-t border-b border-white/10 bg-[#060507] py-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#060507] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#060507] to-transparent" />
          
          <div className="flex w-max animate-[marquee_25s_linear_infinite] items-center gap-10 whitespace-nowrap text-white/20 select-none">
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:[-webkit-text-stroke:1px_#2176ff] hover:text-[#2176ff] transition-all duration-300">
              NEXT.JS • REACT • TYPESCRIPT
            </span>
            <span className="h-4 w-4 rounded-full bg-[#2176ff]/60 shadow-[0_0_15px_#2176ff]" />
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white/30">
              DISTRIBUTED ARCHITECTURE
            </span>
            <span className="h-4 w-4 rounded-full bg-emerald-400/60 shadow-[0_0_15px_#10b981]" />
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)] hover:[-webkit-text-stroke:1px_#2176ff] hover:text-[#2176ff] transition-all duration-300">
              AWS EC2 &amp; NGINX
            </span>
            <span className="h-4 w-4 rounded-full bg-[#2176ff]/60 shadow-[0_0_15px_#2176ff]" />
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white/30">
              MICRO-INTERACTIONS
            </span>
            <span className="h-4 w-4 rounded-full bg-emerald-400/60 shadow-[0_0_15px_#10b981]" />
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.25)]">
              NEXT.JS • REACT • TYPESCRIPT
            </span>
            <span className="h-4 w-4 rounded-full bg-[#2176ff]/60" />
            <span className="font-display text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white/30">
              DISTRIBUTED ARCHITECTURE
            </span>
          </div>
        </div>

        {/* Halden Massive Statement Footer & Contact ("Got a Vision? Let's Build It.") */}
        <section id="contact" className="relative overflow-hidden border-t border-white/10 px-6 py-28 sm:px-10 lg:py-40 bg-[#040405]">
          {/* Outro Ambient Spotlight & Glow */}
          <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-t from-[#2176ff]/20 via-[#2176ff]/5 to-transparent blur-[140px]" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2176ff]/50 to-transparent" />

          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#2176ff]/30 bg-[#2176ff]/10 px-4 py-1.5 font-mono text-xs text-[#5c9bff]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#2176ff] shadow-[0_0_10px_#2176ff]" />
                  <span>Available for Full-Time Roles &amp; High-Impact Work</span>
                </div>

                <h2 className="mt-6 font-display text-5xl font-extrabold uppercase leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
                  Got a Vision? <br />
                  <span className="bg-gradient-to-r from-[#2176ff] via-[#5c9bff] to-white bg-clip-text text-transparent">
                    Let&apos;s Build It.
                  </span>
                </h2>

                <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-[#9a9a9a]">
                  Whether you are building a mission-critical platform, optimizing system scale, or seeking a dedicated full-stack engineer — my inbox is always open.
                </p>

                {/* Direct Action Contacts */}
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={`mailto:${email}`}
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#edf5fc] px-8 py-4 font-heading text-sm font-bold text-black transition-all hover:bg-[#2176ff] hover:text-white hover:shadow-[0_0_40px_rgba(33,118,255,0.5)] hover:scale-105"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Send Direct Email</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.04] px-7 py-4 font-mono text-xs text-white transition-all hover:border-white/40 hover:bg-white/10"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-400" />
                        <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4 text-white/50" />
                        <span>{email}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Info Card with Halden Glassmorphic Design */}
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#0b0a0d]/90 p-8 shadow-2xl backdrop-blur-2xl lg:col-span-4 transition-all hover:border-[#2176ff]/50">
                <div className="font-mono text-xs uppercase tracking-wider text-[#9a9a9a]">Direct Reach</div>
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase">Phone / WhatsApp</div>
                    <div className="font-heading text-lg font-bold text-white">{phone}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase">Location</div>
                    <div className="font-heading text-base text-white">Greater Noida / Delhi NCR, India</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase">Availability</div>
                    <div className="font-heading text-base text-emerald-400 font-semibold">Immediate for 2026/2027 roles</div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-white/40">Network</div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/yash130413"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#2176ff] hover:bg-[#2176ff]/20 hover:text-white hover:scale-105"
                      aria-label="GitHub"
                    >
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/yash-rohilla-088b83225/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/80 transition-all hover:border-[#2176ff] hover:bg-[#2176ff]/20 hover:text-white hover:scale-105"
                      aria-label="LinkedIn"
                    >
                      <LinkedinIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Epic Layered Outro: Quote Floating Directly OVER Massive Watermark */}
            <div className="relative mt-28 overflow-hidden border-t border-white/10 pt-20 pb-12 text-center select-none">
              {/* Massive Backdrop Watermark (Layer Behind) */}
              <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 font-display text-[14vw] font-black uppercase leading-none tracking-tighter text-white/[0.04]">
                YASH ROHILLA
              </div>

              {/* Bold Quote Layer (Directly On Top of the Watermark) */}
              <div className="relative z-10 mx-auto max-w-3xl px-4 py-8">
                <p className="font-display text-2xl font-bold uppercase leading-snug tracking-tight text-white drop-shadow-2xl sm:text-3xl lg:text-4xl">
                  &ldquo;Architecture isn&apos;t just about making things work — it&apos;s about building systems that refuse to fail.&rdquo;
                </p>
              </div>
            </div>

            {/* Editorial Footer Bottom Bar (Last Element) */}
            <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
              <div className="flex items-center gap-3 font-mono text-xs text-white/40">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>© 2026 Yash Rohilla. All rights reserved.</span>
              </div>

              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 font-mono text-xs text-white/70 transition-all hover:border-[#2176ff] hover:bg-[#2176ff]/10 hover:text-white"
              >
                <span>Back to Top</span>
                <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-1 text-[#2176ff]" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  )
}
