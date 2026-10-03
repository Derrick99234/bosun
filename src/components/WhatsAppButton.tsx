"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export function WhatsAppButton() {
  const [showBubble, setShowBubble] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show attention-calling popup after 1.8 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!dismissed) {
        setShowBubble(true);
      }
    }, 1800);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const phoneNumber = "2349161965510";
  const defaultMessage = encodeURIComponent(
    "Hi Olatunbosun, I saw your portfolio and would like to connect about a project!"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end sm:items-center">
      {/* Interactive Pop-up Speech Bubble */}
      {showBubble && !dismissed && (
        <div className="relative mr-3.5 mb-1 sm:mb-0 max-w-[240px] sm:max-w-[260px] animate-in fade-in slide-in-from-bottom-3 duration-500">
          <div className="relative rounded-2xl border border-slate-200/90 bg-white/95 p-3.5 pr-7 shadow-2xl shadow-slate-900/15 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-slate-950/70">
            {/* Close button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowBubble(false);
                setDismissed(true);
              }}
              className="absolute top-2.5 right-2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-200 transition"
              aria-label="Close message"
            >
              <IoClose className="h-4 w-4" />
            </button>

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group text-left"
            >
              <p className="text-xs font-semibold text-slate-900 dark:text-slate-100 leading-snug">
                Would you like to chat with me? <span className="inline-block animate-bounce">👋</span>
              </p>
              <p className="mt-1 text-[11px] text-slate-600 dark:text-slate-400 leading-normal">
                Let&apos;s discuss your web, mobile, or AI project on WhatsApp!
              </p>
            </Link>

            {/* Speech bubble tail pointing right towards the button */}
            <div className="hidden sm:block absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-y-[7px] border-y-transparent border-l-[8px] border-l-white dark:border-l-slate-900 drop-shadow-sm" />
          </div>
        </div>
      )}

      {/* Main WhatsApp Floating Button */}
      <div className="relative">
        {/* Subtle attention-calling pulse ripple ring */}
        <span className="absolute -inset-1.5 rounded-full bg-slate-400/20 dark:bg-slate-500/25 animate-ping pointer-events-none" />

        <Link
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Olatunbosun on WhatsApp"
          className="group relative flex h-14 w-14 sm:h-15 sm:w-15 items-center justify-center rounded-full border border-slate-200/90 bg-white p-3.5 text-slate-900 shadow-2xl shadow-slate-900/20 backdrop-blur transition-all duration-300 hover:scale-110 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-95 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:shadow-slate-950/80 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
          title="Chat on WhatsApp"
          onClick={() => setShowBubble(false)}
        >
          <FaWhatsapp className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
        </Link>
      </div>
    </div>
  );
}
