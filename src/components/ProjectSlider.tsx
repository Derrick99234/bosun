"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";

export type Project = {
  title: string;
  description: string;
  href: string;
  image: string;
  preview?: string;
  contribution: string;
  tags: string[];
  repo?: string;
  featured?: boolean;
};

export function ProjectSlider({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imgError, setImgError] = useState(false);

  const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);
  const current = featuredProjects[currentIndex] || featuredProjects[0];

  useEffect(() => {
    setImgError(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isAutoPlaying || featuredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredProjects.length - 1 : prev - 1
    );
  };

  if (!current) return null;

  const previewScreenshot =
    current.preview ||
    `https://s0.wp.com/mshots/v1/${encodeURIComponent(current.href)}?w=1200&h=750`;

  return (
    <div
      className="space-y-8"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Main Slider Card */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/60 sm:p-10">
        <div className="grid items-center gap-8 lg:grid-cols-12">
          
          {/* Left: Interactive Real Website Preview Window */}
          <div className="lg:col-span-6">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
              
              {/* Browser Mockup Topbar */}
              <div className="flex items-center justify-between border-b border-slate-200 bg-white/95 px-4 py-2.5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-rose-400 dark:bg-rose-500" />
                  <span className="h-3 w-3 rounded-full bg-amber-400 dark:bg-amber-500" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400 dark:bg-emerald-500" />
                </div>
                <div className="flex items-center gap-2 truncate max-w-[220px] rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="truncate">{current.href.replace(/^https?:\/\//, "")}</span>
                </div>
                <Link
                  href={current.href}
                  target="_blank"
                  className="text-xs text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                  title="Open in new tab"
                >
                  <FaExternalLinkAlt className="h-3 w-3" />
                </Link>
              </div>

              {/* Website Preview Frame */}
              <Link
                href={current.href}
                target="_blank"
                className="relative block aspect-[16/10] w-full overflow-hidden bg-slate-950"
              >
                {!imgError ? (
                  <Image
                    src={previewScreenshot}
                    alt={`${current.title} live screenshot`}
                    width={1200}
                    height={750}
                    unoptimized
                    onError={() => setImgError(true)}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 shadow">
                      <Image
                        src={current.image}
                        alt={current.title}
                        width={36}
                        height={36}
                        className="h-9 w-9 object-contain"
                      />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-slate-200">{current.title}</p>
                    <p className="mt-1 text-xs text-slate-400">{current.href}</p>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-slate-900 shadow-lg">
                    <span>Visit Live Site</span>
                    <FaExternalLinkAlt className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          {/* Right: Project Details */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Featured Project 0{currentIndex + 1} / 0{featuredProjects.length}
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
                  {current.contribution}
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
                {current.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {current.description}
              </p>

              {/* Tags */}
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Technologies
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-slate-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions & Navigation Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
              <div className="flex items-center gap-3">
                <Link
                  href={current.href}
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
                >
                  Visit Project
                  <FaExternalLinkAlt className="h-3 w-3" />
                </Link>
                {current.repo && (
                  <Link
                    href={current.repo}
                    target="_blank"
                    className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Repository
                  </Link>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <FaChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  <FaChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnails / Slide Selectors */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {featuredProjects.map((p, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={p.title}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                isActive
                  ? "border-blue-500 bg-blue-50/50 shadow-md ring-2 ring-blue-500/20 dark:border-blue-400 dark:bg-blue-950/30 dark:ring-blue-400/20"
                  : "border-slate-200 bg-white/60 hover:bg-white dark:border-slate-800 dark:bg-slate-950/40 dark:hover:bg-slate-900"
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700 dark:bg-slate-800">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded object-contain"
                />
              </div>
              <div className="min-w-0">
                <p
                  className={`truncate text-xs font-semibold ${
                    isActive
                      ? "text-blue-700 dark:text-blue-300"
                      : "text-slate-800 dark:text-slate-200"
                  }`}
                >
                  {p.title}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  {p.contribution}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* View All Projects Footer Callout */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-slate-200/80 bg-gradient-to-r from-slate-50 via-white to-slate-50 p-6 dark:border-slate-800/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 sm:flex-row">
        <div>
          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Want to see all projects?
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Explore the complete archive of {projects.length} web applications, SaaS tools, and backend services.
          </p>
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200"
        >
          View All Projects ({projects.length}) &rarr;
        </Link>
      </div>
    </div>
  );
}
