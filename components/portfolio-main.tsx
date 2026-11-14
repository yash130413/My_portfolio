"use client"

import React, { useState } from "react"
import {
  ArrowUpRight,
  Mail,
  ExternalLink,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  Check,
  Copy,
  ArrowUp,
  Briefcase,
  GraduationCap,
  Database,
  Cloud,
  Phone,
  Calendar,
  MapPin,
  CheckCircle2,
  Activity,
  Zap,
} from "lucide-react"

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

function GfgIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.8 10.6c-.3-1.4-1.2-2.5-2.4-3.2-1.2-.7-2.7-.9-4.1-.5l-.8.2c-.3-.8-.7-1.5-1.3-2.1C9.9 3.8 8.1 3 6.2 3.3 4.3 3.6 2.6 4.9 1.7 6.6.9 8.4.8 10.5 1.7 12.3c.8 1.8 2.5 3.1 4.4 3.4.6.1 1.2.1 1.8 0 .4.8 1 1.5 1.8 2.1 1.3 1 3 1.3 4.6 1 .9-.2 1.8-.7 2.5-1.3.7-.7 1.2-1.5 1.5-2.4l1.5.3c1.4.3 2.8 0 4-.8 1.1-.8 1.8-2 2-3.4.2-1.4-.2-2.8-1-3.9-.8-1-2-1.7-3.4-1.8l-1.9-.2zm-12.7 3c-1.1-.2-2.1-1-2.6-2-.5-1-.5-2.2-.1-3.2.4-1 1.3-1.8 2.3-2 1-.2 2.1.2 2.8.9.7.7 1 1.8 1 2.8v.3c-.9 1.8-2.2 3-3.4 3.2zm6.7 1.8c-1 .2-2-.1-2.7-.7-.8-.7-1.2-1.6-1.3-2.6 1-.3 1.9-.9 2.6-1.7.7.8 1.6 1.4 2.6 1.7 0 1-.5 2-1.2 2.6-.6.5-1.4.8-2.2.7zm5.5-2.5c-.8-.2-1.6-.7-2.1-1.3v-.3c0-1.1.4-2.1 1.1-2.9.7-.7 1.7-1.1 2.8-.9 1 .2 1.9 1 2.3 2 .5 1 .4 2.2-.1 3.2-.5 1-1.4 1.7-2.5 2-.5-.1-1-.4-1.5-.8z" />
    </svg>
  )
}

interface Project {
  title: string
  subtitle: string
  category: string
  description: string
  highlights: string[]
  tags: string[]
  image: string
  liveUrl?: string
  githubUrl: string
}

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Ledgerly",
    subtitle: "AI Spend Optimization Platform",
    category: "Full-Stack • AI Audit Engine",
    description:
      "A full-stack AI spend optimization platform enabling engineering & finance teams to audit spend across 5 AI providers and share finance-ready audit reports without requiring users to sign in.",
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
    title: "PharmaConnect",
    subtitle: "B2B Pharmaceutical Marketplace",
    category: "Full-Stack • Cloud Deployed",
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
    title: "GeoSight",
    subtitle: "Automated Geospatial Intelligence Platform",
    category: "GIS • Satellite Analytics",
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

export default function PortfolioMain() {
  const [copied, setCopied] = useState(false)
  const email = "yashrohilla1204@gmail.com"
  const phone = "+91 9354139378"

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div id="portfolio-main" className="relative min-h-screen bg-[#05070d] text-[#f2f4f8] font-body antialiased">
      {/* Fixed City Background matching the Metro video nightscape */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* City image extracted directly from the video */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/city-bg.jpg')",
            filter: "brightness(0.65) contrast(1.15)",
          }}
        />

        {/* Dark cinematic vignette & atmospheric gradients for 100% text readability */}
        <div className="absolute inset-0 bg-[#05070d]/70 backdrop-blur-[2.5px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070d]/35 via-[#05070d]/75 to-[#05070d]" />

        {/* Subtle city-matched neon radial glows */}
        <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute top-1/2 right-10 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[160px]" />
        <div className="absolute bottom-10 left-1/3 h-[500px] w-[500px] rounded-full bg-indigo-500/15 blur-[150px]" />
      </div>

      {/* Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#05070d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="#portfolio-main"
            className="flex items-center gap-2.5 font-display text-base font-extrabold tracking-wider text-white"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
            YASH ROHILLA
          </a>

          <nav className="hidden items-center gap-7 font-heading text-xs font-semibold tracking-wide text-white/60 md:flex">
            <a href="#about" className="transition-colors hover:text-cyan-300">
              // 01. About
            </a>
            <a href="#experience" className="transition-colors hover:text-cyan-300">
              // 02. Experience
            </a>
            <a href="#projects" className="transition-colors hover:text-cyan-300">
              // 03. Projects
            </a>
            <a href="#skills" className="transition-colors hover:text-cyan-300">
              // 04. Skills
            </a>
            <a href="#education" className="transition-colors hover:text-cyan-300">
              // 05. Education
            </a>
            <a href="#contact" className="transition-colors hover:text-cyan-300">
              // 06. Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="group flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 font-heading text-xs font-semibold text-cyan-300 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_16px_rgba(34,211,238,0.3)]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </header>

      {/* Main Hero Section: Two-Column High-Impact Creative Showcase */}
      <section className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-6 py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7">
            {/* Status indicator badge */}
            <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Third-Year CS @ Bennett University • Ex-Intern @ Xebia
            </div>

            {/* Stylized Display Headline */}
            <div className="mt-8">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08]">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  Yash Rohilla
                </span>
                .<br />
                <span className="text-white/95">Full-Stack Developer</span> &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                  Systems Engineer
                </span>
                .
              </h1>
              <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/70">
                Crafting real-time distributed backends, multiplayer systems with{" "}
                <strong className="text-white">Socket.IO &amp; Redis</strong>, robust Controller-Service-Repository
                APIs, and deploying high-performance cloud applications on{" "}
                <strong className="text-white">AWS EC2 with Nginx</strong>.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 font-heading text-sm font-bold text-black transition-all hover:shadow-[0_0_28px_rgba(34,211,238,0.5)] hover:scale-[1.02]"
              >
                <span>View Featured Projects</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-heading text-sm font-semibold text-white transition-all hover:border-cyan-400/40 hover:bg-white/10"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>{email}</span>
              </a>

              {/* Social / Profile Icons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:text-white hover:scale-105"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:text-white hover:scale-105"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href="https://geeksforgeeks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GeeksforGeeks Profile"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-all hover:border-cyan-400/40 hover:bg-white/10 hover:text-white hover:scale-105"
                >
                  <GfgIcon className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Highlight counters */}
            <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-cyan-400">8.22</div>
                <div className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
                  CGPA @ Bennett Univ
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">300+</div>
                <div className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
                  DSA Problems Solved
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">Xebia</div>
                <div className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
                  Ex-Full Stack Intern
                </div>
              </div>
              <div>
                <div className="font-display text-3xl sm:text-4xl font-extrabold text-white">AWS &amp; Nginx</div>
                <div className="mt-1 font-heading text-xs font-semibold uppercase tracking-wider text-white/50">
                  Production Cloud
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Developer Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-2.5 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/50">
              {/* Terminal window header */}
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-[11px] text-white/40">yash@workstation: ~/portfolio</span>
                <Activity className="h-3.5 w-3.5 text-cyan-400" />
              </div>

              {/* High-res Developer Desk Visual */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80"
                  alt="Yash Rohilla Developer Environment"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-black/30 to-transparent" />

                {/* Floating pill: Active Role */}
                <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/70 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  <Zap className="h-3 w-3 text-cyan-400" />
                  <span>Real-Time Full-Stack</span>
                </div>

                {/* Bottom glassmorphic overlay inside image */}
                <div className="absolute bottom-3 inset-x-3 rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-heading font-semibold text-white">Yash Rohilla</span>
                    <span className="font-mono text-[10px] text-emerald-400">● Open for Roles</span>
                  </div>
                  <div className="mt-1 font-mono text-[10px] text-white/60">
                    B.Tech CS &apos;27 • Bennett University
                  </div>
                </div>
              </div>

              {/* Mini tech badges below card image */}
              <div className="mt-3 grid grid-cols-2 gap-2 p-2 font-mono text-[11px]">
                <div className="rounded-xl border border-white/5 bg-white/5 p-2.5">
                  <div className="text-white/40 text-[9px] uppercase">Specialization</div>
                  <div className="font-semibold text-cyan-300">Socket.IO + Redis</div>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/5 p-2.5">
                  <div className="text-white/40 text-[9px] uppercase">Architecture</div>
                  <div className="font-semibold text-white">CSR Pattern</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Split Story & Engineering Visual */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
              // 01. Background & Profile
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Engineering resilient backends &amp; high-precision digital products.
            </h2>
            <div className="mt-6 flex flex-col gap-3 font-mono text-xs text-white/70">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>Bennett University, Greater Noida, Uttar Pradesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>{email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>{phone}</span>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/70">
              <p>
                I am a third-year Computer Science student at <strong>Bennett University</strong>. My core
                engineering focus lies in building scalable distributed systems, high-concurrency state
                synchronization, and full-stack web applications.
              </p>
              <p>
                During my internship at <strong>Xebia</strong>, I engineered backend modules for a Kahoot-style
                interactive learning platform, implementing role-based access control (RBAC), multiplayer
                sessions with <strong>Socket.IO and Redis</strong>, and high-throughput REST APIs following the{" "}
                <strong>Controller-Service-Repository</strong> design pattern.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 font-mono text-xs text-cyan-300">
              <Terminal className="h-4 w-4" />
              <span>Core Stack: Node.js • TypeScript • Redis • Socket.IO • PostgreSQL • AWS</span>
            </div>
          </div>

          {/* About Visual Card */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-3 shadow-xl backdrop-blur-md">
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-black/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Software Architecture & Teamwork"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/20" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                  <div className="font-heading text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Philosophy
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white">
                    Clean Code • Measurable Performance • Zero Redundant Queries
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship & Experience Section with Visual Illustration */}
      <section id="experience" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div>
          <div className="font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
            // 02. Professional Experience
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Internship Journey
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl transition-all hover:border-cyan-500/30">
          {/* Left: Text & Achievements */}
          <div className="lg:col-span-7">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center border-b border-white/5 pb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/25">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Full Stack Developer Intern</h3>
                  <div className="font-heading text-sm font-bold text-cyan-400">Xebia</div>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-white/50">
                <Calendar className="h-4 w-4" />
                <span>June 2026 – July 2026</span>
              </div>
            </div>

            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-white/75">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-1" />
                <span>
                  Contributed to building a <strong>Kahoot-style interactive learning platform</strong> using{" "}
                  <strong>React.js, TypeScript, Node.js, Redis, and PostgreSQL</strong>, enabling live quizzes,
                  assessments, synchronized multiplayer sessions, and automated real-time scoring.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-1" />
                <span>
                  Built backend modules for profile management and <strong>role-based access control (RBAC)</strong>,
                  and engineered real-time multiplayer state synchronization using <strong>Socket.IO</strong> and{" "}
                  <strong>Redis</strong>.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400 mt-1" />
                <span>
                  Developed high-throughput <strong>REST APIs</strong> for users, quizzes, assessments, AI-generated quizzes,
                  scoring, and real-time leaderboards following strict <strong>Controller-Service-Repository architecture</strong>.
                </span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-2 pt-6 border-t border-white/5">
              {["React.js", "TypeScript", "Node.js", "Redis", "PostgreSQL", "Socket.IO", "RBAC", "Controller-Service-Repo"].map(
                (skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 font-mono text-xs font-semibold text-cyan-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Xebia Project Context Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                alt="Interactive Multiplayer Learning Platform"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
              <div className="p-3">
                <div className="font-heading text-xs font-bold text-white">Interactive Multiplayer Platform</div>
                <div className="mt-0.5 font-mono text-[11px] text-white/50">
                  Real-time live session synchronization with Redis Pub/Sub
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section with High-Impact Domain Imagery */}
      <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
              // 03. Production Projects
            </div>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured Work
            </h2>
          </div>
          <p className="max-w-md text-sm text-white/60">
            Real-world systems demonstrating full-stack engineering, rule-engine design, cloud deployments, and spatial data.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.04] hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 rounded-full border border-white/20 bg-black/70 px-3.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
                      {project.title}
                    </h3>
                    <div className="text-xs text-white/50 font-mono mt-0.5">{project.subtitle}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Repository"
                      className="rounded-lg border border-white/10 p-2 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                    >
                      <GithubIcon className="h-4 w-4" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                        className="rounded-lg border border-white/10 p-2 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-white/70">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mt-4 space-y-2 text-xs text-white/60 flex-1">
                  {project.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5 font-bold">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div>
          <div className="font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
            // 04. Technical Capabilities
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Skills &amp; Arsenal
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-white/60">
            Technical foundation covering languages, frontend, backend frameworks, cloud infrastructure, and databases.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {/* Languages */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["C", "C++", "Java", "TypeScript", "JavaScript (ES6+)", "Python"].map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend & Real-Time */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Backend &amp; Real-Time</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Node.js", "Express.js", "NestJS", "Flask", "REST APIs", "Redis", "Socket.IO"].map(
                (skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Frontend */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Frontend</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Leaflet.js"].map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Databases &amp; ORMs</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Redis Cache"].map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cloud & Tools */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Cloud &amp; DevOps</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["AWS (EC2, Amplify)", "Docker", "Nginx", "GitHub Actions", "Vercel", "Git", "Postman"].map(
                (skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Core CS Concepts */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-white">Core Computer Science</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Data Structures (300+ Solved)",
                "Algorithms",
                "DBMS",
                "Operating Systems",
                "Computer Networks",
                "OOPs",
                "Controller-Service-Repo",
              ].map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:border-cyan-400/40 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section with Campus Architecture Visual */}
      <section id="education" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div>
          <div className="font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
            // 05. Academic Background
          </div>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Education
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Education List */}
          <div className="lg:col-span-7 space-y-6">
            {/* B.Tech */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-cyan-400/40">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">Bachelor of Technology in Computer Science</h3>
                    <div className="font-heading text-sm text-cyan-400 font-semibold">Bennett University, Greater Noida, Uttar Pradesh</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-emerald-400 font-bold">
                    CGPA: 8.22
                  </span>
                  <span className="text-white/50">2024 – Present</span>
                </div>
              </div>
            </div>

            {/* 12th */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-white/20">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-base font-bold text-white">Higher Secondary School – XII (CBSE)</h3>
                  <div className="text-sm text-white/60">S D Memorial Senior Secondary School, Haryana</div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-white/90 font-bold">
                    80%
                  </span>
                  <span className="text-white/50">2023</span>
                </div>
              </div>
            </div>

            {/* 10th */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-xl transition-all hover:border-white/20">
              <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display text-base font-bold text-white">Secondary School – X (CBSE)</h3>
                  <div className="text-sm text-white/60">S D Memorial Senior Secondary School, Haryana</div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-white/90 font-bold">
                    85%
                  </span>
                  <span className="text-white/50">2021</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education Campus Visual */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-2.5 backdrop-blur-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern Academic Campus Environment"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-black/75 p-3.5 backdrop-blur-md">
                  <div className="font-heading text-xs font-bold text-cyan-400">Bennett University (Times Group)</div>
                  <div className="text-xs text-white/70 mt-0.5">School of Computer Science Engineering &amp; Technology</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-28 border-t border-white/5">
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.06] to-transparent p-10 sm:p-16 backdrop-blur-2xl">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 font-heading text-xs font-bold uppercase tracking-widest text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" />
              <span>// 06. Get In Touch</span>
            </div>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s build scalable software together.
            </h2>
            <p className="mt-4 text-base text-white/70">
              Whether you are looking for a dedicated full-stack developer, have backend engineering
              opportunities, or want to discuss a project — I would love to connect.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 font-heading text-sm font-bold text-black transition-all hover:shadow-[0_0_24px_rgba(34,211,238,0.5)] hover:scale-105"
              >
                <Mail className="h-4 w-4" />
                <span>Email: {email}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-heading text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-white/60" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`tel:${phone}`}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-heading text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>{phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 sm:flex-row">
          <div>© 2026 Yash Rohilla • Computer Science Student &amp; Developer.</div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 px-4 py-1.5 font-heading text-xs text-white/60 transition-all hover:border-white/30 hover:text-white"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </section>
    </div>
  )
}
