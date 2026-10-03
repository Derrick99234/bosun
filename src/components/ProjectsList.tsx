"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  contribution: string;
  tags: string[];
  repo?: string;
  featured?: boolean;
};

export function ProjectsList({ allProjects }: { allProjects: Project[] }) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Featured", "Full-stack", "Backend", "AI / Automation"];

  const filteredProjects = allProjects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    if (!matchesSearch) return false;

    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured === true;
    if (activeFilter === "Full-stack") return p.contribution === "Full-stack";
    if (activeFilter === "Backend") return p.contribution === "Backend";
    if (activeFilter === "AI / Automation")
      return (
        p.tags.some((t) =>
          ["AI / Voice", "AI APIs", "AI", "Integrations"].includes(t)
        ) || p.title.toLowerCase().includes("ai")
      );

    return true;
  });

  return (
    <div>
      {/* Search & Filters */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search bar */}
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by project name, tech, keyword..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-11 pr-4 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeFilter === f
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "border border-slate-200 bg-white/70 text-slate-700 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/40 dark:shadow-none"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={project.image}
                    alt={`${project.title} icon`}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-xl border border-slate-200 bg-white object-contain p-2 dark:border-slate-800 dark:bg-slate-900"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {project.contribution === "Backend" ? "Backend-only" : "Full-stack"}
                    </p>
                  </div>
                </div>
                {project.featured && (
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-bold text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
                    Featured
                  </span>
                )}
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-slate-200 bg-white/70 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 dark:border-slate-900">
              <Link
                href={project.href}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                <span>Visit Live</span>
                <FaExternalLinkAlt className="h-3 w-3" />
              </Link>
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  <FaGithub className="h-3.5 w-3.5" />
                  <span>Repo</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-base font-semibold text-slate-600 dark:text-slate-400">
            No projects match your current search/filter.
          </p>
        </div>
      )}
    </div>
  );
}
