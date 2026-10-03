import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ProjectsList } from "@/components/ProjectsList";
import portfolioData from "@/data/portfolio.json";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "All Projects | " + portfolioData.profile.name,
  description: "Complete archive of software engineering projects, AI platforms, and web applications built by " + portfolioData.profile.name,
};

export default function ProjectsPage() {
  const profile = portfolioData.profile;
  const allProjects = portfolioData.projects;

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-4 py-3 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              <FaArrowLeft className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-3">
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

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-24">
        {/* Title */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 dark:text-blue-400 uppercase">
            Archive & Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            All Projects ({allProjects.length})
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A comprehensive list of products, SaaS applications, backend systems, APIs, and client platforms I have built and contributed to.
          </p>
        </div>

        {/* Client Interactive Search/Filter List */}
        <ProjectsList allProjects={allProjects} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
