import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
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

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
      <div className="-mt-1 mb-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src={project.image}
            alt={`${project.title} icon`}
            width={40}
            height={40}
            className="h-10 w-10 rounded-xl border border-slate-200 bg-white object-contain p-2 dark:border-slate-800 dark:bg-slate-950"
          />
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-slate-100">
              {project.title}
            </h3>
            <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
              {project.contribution === "Backend" ? "Backend-only" : "Full-stack"}
            </p>
          </div>
        </div>
        <Link
          href={project.href}
          target="_blank"
          className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          Visit
        </Link>
      </div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
      {project.repo && (
        <div className="mt-5">
          <Link
            href={project.repo}
            target="_blank"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
          >
            Repo
          </Link>
        </div>
      )}
    </div>
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
                href="/OLATUNBOSUN_RESUME.pdf"
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
                <div className="flex flex-wrap gap-2">
                  <Badge>Software Engineer</Badge>
                  <Badge>Web & Mobile</Badge>
                  <Badge>APIs • Auth • Databases</Badge>
                  <Badge>Automation • AI</Badge>
                </div>
                <h1 className="mt-8 text-4xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
                  {profile.name}
                </h1>
                <p className="mt-4 max-w-2xl text-base font-semibold tracking-tight text-slate-700 dark:text-slate-300">
                  {profile.title}
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                  Highly skilled software engineer with a strong foundation in
                  designing, developing, and deploying scalable software solutions. I
                  collaborate across teams to deliver innovative products and optimize
                  system performance—focused on impact, clarity, and maintainability.
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
                    href="/OLATUNBOSUN_RESUME.pdf"
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
                      Full-stack delivery with strong backend foundations across web
                      and mobile development.
                    </p>
                  </div>
                </div>

                <div className="mt-7 grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Focus
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Full-stack apps, scalable APIs, auth flows, and workflow automation.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-950">
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                      Strengths
                    </p>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                      Problem-solving, performance optimization, and maintainable systems.
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
                    I&apos;m {profile.name}, a software engineer based in{" "}
                    {profile.location}. I build scalable web and mobile applications
                    with a strong backend foundation—clean APIs, authentication flows,
                    and reliable database integration—while also delivering modern UIs
                    in React/Next.js and React Native.
                  </p>
                  <p className="mt-4 leading-8 text-slate-600 dark:text-slate-400">
                    I&apos;ve also worked as an instructor, training and mentoring
                    students across frontend and backend technologies, and I bring
                    that clarity into how I communicate, document, and ship work on a
                    team.
                  </p>
                  {/* <div className="mt-6 flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Nest.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>React Native</Badge>
                  </div> */}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {[
                {
                  title: "Backend Engineering",
                  text: "Secure APIs, authentication, database design, logging, and debugging with scalable structure.",
                  detail:
                    "I build RESTful APIs, implement JWT/RBAC, integrate MongoDB, and connect third-party services with reliable error handling.",
                },
                {
                  title: "Frontend Delivery",
                  text: "Responsive interfaces in React/Next.js with clean integration and performance focus.",
                  detail:
                    "I ship accessible UI, reusable components, and API-driven screens that stay fast on mobile and desktop.",
                },
                {
                  title: "Automation & AI",
                  text: "Automate manual workflows and integrate AI features pragmatically for real business value.",
                  detail:
                    "I automate repetitive processes, build integrations, and add AI-assisted features where they improve real outcomes.",
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
                title: "API Design & Development",
                text: "REST APIs with consistent patterns, validation, error handling, and maintainable code structure.",
              },
              {
                title: "Auth & Permissions",
                text: "JWT authentication, RBAC, and secure authorization boundaries with predictable access control.",
              },
              {
                title: "Database & Performance",
                text: "Schema modeling, query optimization, indexes, and performance-focused data access design.",
              },
              {
                title: "Frontend Integration",
                text: "Modern UI with Next.js + React, clean API consumption, and accessible component patterns.",
              },
              {
                title: "Third-Party Integrations",
                text: "Payments, messaging, storage, and external APIs integrated safely with robust failure handling.",
              },
              {
                title: "Automation & AI Features",
                text: "Workflow automation and AI helpers that improve productivity without adding long-term complexity.",
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

        <Section
          id="projects"
          eyebrow="Projects"
          title={`Selected projects (${projects.length})`}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Want to see more? I keep shipping and iterating on GitHub.
            </p>
            <Link
              href={profile.links.github}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-100 dark:hover:bg-slate-900"
            >
              View GitHub
            </Link>
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s work together">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Get in touch
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                If you need a backend-leaning full-stack engineer to build APIs, ship
                features end-to-end, or automate workflows, I&apos;m open to opportunities.
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
                    value: "Software Engineer",
                  },
                  { label: "Primary Strength", value: "Full-Stack (Backend-leaning)" },
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
                  Send an email
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
