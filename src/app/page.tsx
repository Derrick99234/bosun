import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectSlider } from "@/components/ProjectSlider";
import portfolioData from "@/data/portfolio.json";

import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  contribution: "Full-stack" | "Backend";
  tags: string[];
  repo?: string;
};

type Experience = {
  company: string;
  location: string;
  role: string;
  dates: string;
  workMode?: string;
  highlights: string[];
};

type PortfolioData = {
  profile: {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    links: {
      github: string;
      linkedin: string;
      x: string;
    };
  };
  resumeSummary: string[];
  projects: Project[];
  skills: {
    frontend: string[];
    backend: string[];
    mobile: string[];
    tools: string[];
  };
  experience: Experience[];
};

const portfolio = portfolioData as PortfolioData;
const profile = portfolio.profile;
const projects = portfolio.projects;
const frontendSkills = portfolio.skills.frontend;
const backendSkills = portfolio.skills.backend;
const mobileSkills = portfolio.skills.mobile;
const toolsSkills = portfolio.skills.tools;
const experience = portfolio.experience;

const nameParts = profile.name.trim().split(/\s+/);
const firstName =
  nameParts.length > 1 ? nameParts.slice(0, -1).join(" ") : profile.name;
const lastName = nameParts.length > 1 ? nameParts.at(-1) ?? "" : "";
const initials = `${firstName[0] ?? ""}${lastName[0] ?? ""}`.toUpperCase();

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:text-slate-300">
      {children}
    </span>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-slate-600 dark:text-slate-400">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 font-semibold tracking-tight text-slate-900 dark:text-slate-100"
            >
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-fuchsia-600 to-emerald-500 p-[1px]">
                <span className="inline-flex h-full w-full items-center justify-center rounded-[11px] bg-white text-xs font-extrabold tracking-tight text-slate-900 dark:bg-slate-950 dark:text-slate-100">
                  {initials}
                </span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-sm font-semibold tracking-tight">
                  {firstName}
                </span>
                <span className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {lastName}
                </span>
              </span>
            </Link>
            <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-300 md:flex">
              <Link href="#about" className="hover:text-slate-900 dark:hover:text-white">
                About
              </Link>
              <Link
                href="#experience"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Experience
              </Link>
              <Link href="#services" className="hover:text-slate-900 dark:hover:text-white">
                Services
              </Link>
              <Link href="#stack" className="hover:text-slate-900 dark:hover:text-white">
                Stack
              </Link>
              <Link href="#projects" className="hover:text-slate-900 dark:hover:text-white">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-slate-900 dark:hover:text-white">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link
                href="#contact"
                className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200 sm:inline-flex"
              >
                Let&apos;s Talk
              </Link>
              <Link
                href="/OLATUNBOSUN_RESUME_V2.pdf"
                target="_blank"
                className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900 sm:inline-flex"
              >
                Resume
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-28">
        <section id="top" className="relative overflow-hidden py-20 sm:py-28">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-fuchsia-500/20 blur-3xl dark:from-blue-400/10 dark:via-cyan-300/5 dark:to-fuchsia-400/10" />
            <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-emerald-500/10 via-sky-500/10 to-indigo-500/10 blur-3xl dark:from-emerald-400/5 dark:via-sky-400/5 dark:to-indigo-400/5" />
          </div>

          <div className="mx-auto max-w-6xl px-6">
            <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-4 max-w-2xl text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300">
                  {profile.title}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Full-Stack &amp; AI Systems Engineer with founder-grade execution. I architect
                  high-performance web &amp; mobile applications, resilient backend microservices,
                  and autonomous AI agents that solve complex business challenges and drive
                  real commercial impact.
                </p>
                <p className="mt-4 text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {profile.location}
                </p>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                  >
                    <CiMail className="h-5 w-5" />
                    Email Me
                  </Link>
                  <Link
                    href="/OLATUNBOSUN_RESUME_V2.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                  >
                    Download Resume
                  </Link>
                  <Link
                    href={profile.links.github}
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                  >
                    <FaGithub className="h-5 w-5" />
                    GitHub
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.2em] text-slate-600 dark:text-slate-400">
                      AVAILABLE FOR
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-slate-900 dark:text-slate-100">
                      Contract • Remote
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      Available for remote contracts, core engineering roles, and technical advisory.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Focus
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Production AI agents, high-throughput APIs, real-time voice pipelines, and 0→1 product builds.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Strengths
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Founder-level execution, systems architecture, rapid prototyping, and end-to-end delivery.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-center gap-3">
                  <Link
                    href={profile.links.linkedin}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href={profile.links.x}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                    aria-label="X"
                  >
                    <FaXTwitter className="h-5 w-5" />
                  </Link>
                  <Link
                    href={profile.links.github}
                    target="_blank"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" eyebrow="About" title="Engineering that ships">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <div className="flex flex-col gap-6">
                <div className="overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800">
                  <Image
                    src="/ola-profile.png"
                    alt={profile.name}
                    width={900}
                    height={900}
                    priority
                    className="aspect-square w-full object-cover object-top"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    About me
                  </h3>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                    I&apos;m a builder by nature. I engineer scalable web and mobile applications
                    with deep backend rigor—building clean APIs, robust authentication, and high-performance
                    databases, while delivering sleek, responsive interfaces in React/Next.js and React Native.
                  </p>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                    What sets me apart is that I think beyond just lines of code—I build with a product-first,
                    problem-solving mindset. A clear example of this is <strong className="font-semibold text-slate-900 dark:text-slate-100">OneRepAI</strong>,
                    which started as an AI project in my portfolio and evolved into a production platform after
                    conversations with businesses revealed their daily struggle with 24/7 lead capture and customer support.
                  </p>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                    Over the past 3+ years, I&apos;ve combined that builder drive with hands-on technical execution across
                    20+ shipped applications: architecting microservices, sub-second Twilio voice automation, real-time
                    WebSockets, and secure payment workflows. I&apos;ve also mentored 50+ developers, instilling the same
                    engineering clarity, clean documentation, and high standards that I bring to every team and project I take on.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Autonomous AI & Real-Time Systems",
                  text: "Engineering intelligent conversational systems and automated workflows.",
                  detail:
                    "I build low-latency voice agents with Twilio, dynamic knowledge ingestion (PDFs/URLs), WebSocket streaming, and automated calendar integrations.",
                },
                {
                  title: "Resilient Full-Stack Architecture",
                  text: "High-throughput backend engines powering modern web & mobile experiences.",
                  detail:
                    "I design robust REST & WebSocket APIs, secure RBAC/JWT authentication, database schemas (PostgreSQL/MongoDB), and scalable Next.js & React Native applications.",
                },
                {
                  title: "0 → 1 Product & Systems Execution",
                  text: "Translating complex business requirements into production-ready software.",
                  detail:
                    "From rapid prototyping and MVPs to production scaling, I build software that solves real user pain points with maintainable architecture and high reliability.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none"
                >
                  <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" eyebrow="Experience" title="Professional experience">
          <div className="grid gap-6">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.dates}`}
                className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {job.company} • {job.location}
                    </p>
                  </div>
                  <Badge>{job.dates}</Badge>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {job.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-300 dark:bg-slate-700" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="services" eyebrow="Services" title="What I can help you build">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Autonomous AI Agents & Workflows",
                text: "Custom 24/7 AI teammates that ingest your internal knowledge base, qualify leads, automate customer support, and trigger external APIs without human bottlenecks.",
              },
              {
                title: "Real-Time Voice & Chat Infrastructure",
                text: "Sub-second voice agents powered by Twilio Voice, WebSockets, and audio streaming, enabling natural telephone conversations with AI.",
              },
              {
                title: "0 → 1 Web & Mobile Applications",
                text: "End-to-end product development using Next.js, React, and React Native—delivering fast load times, sleek interfaces, and conversion-optimized UX.",
              },
              {
                title: "Scalable APIs & Microservices",
                text: "Modular backend services built with Node.js, NestJS, and Express, designed for high concurrent throughput, clean documentation, and seamless third-party consumption.",
              },
              {
                title: "Fintech & Payment Gateway Systems",
                text: "Secure, webhook-verified monetization pipelines integrating Paystack, Stripe, automated subscription billing, and order management flows.",
              },
              {
                title: "Database Optimization & Security",
                text: "High-reliability data modeling in PostgreSQL, MongoDB, and Redis with strict RBAC access control, indexed queries, and automated backups.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="stack" eyebrow="Stack" title="Tools I work with">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Frontend
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Backend
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Mobile
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {mobileSkills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Tools
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {toolsSkills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Selected Projects with Slider */}
        <Section
          id="projects"
          eyebrow="Projects"
          title={`Selected projects (${projects.length})`}
        >
          <ProjectSlider projects={projects} />
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s work together">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Get in touch
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                Whether you need an engineer to architect a new product from the ground up,
                scale existing platforms, or integrate autonomous AI and resilient APIs into your stack,
                let&apos;s build something impactful together.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <span>Email</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {profile.email}
                  </span>
                </Link>
                <Link
                  href={`tel:${profile.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <span>Phone</span>
                  <span className="text-slate-600 dark:text-slate-400">
                    {profile.phone}
                  </span>
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href={profile.links.linkedin}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  LinkedIn
                </Link>
                <Link
                  href={profile.links.x}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <FaXTwitter className="mr-2 h-4 w-4" />
                  X
                </Link>
                <Link
                  href={profile.links.github}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  GitHub
                </Link>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Quick details
              </h3>
              <div className="mt-6 grid gap-3">
                {[
                  {
                    label: "Role",
                    value: "Full-Stack & AI Systems Engineer",
                  },
                  { label: "Primary Strength", value: "0→1 Systems & Product Engineering" },
                  { label: "Location", value: profile.location },
                  { label: "Availability", value: "Contract • Remote" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm dark:border-slate-800 dark:bg-slate-950"
                  >
                    <span className="font-semibold text-slate-900 dark:text-slate-100">
                      {item.label}
                    </span>
                    <span className="text-slate-600 dark:text-slate-400">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href={`mailto:${profile.email}?subject=Work%20Opportunity`}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Start a Conversation
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Link href="#top" className="hover:text-slate-900 dark:hover:text-white">
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
