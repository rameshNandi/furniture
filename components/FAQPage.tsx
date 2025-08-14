"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// FAQ data
const FAQS = [
  {
    id: "general-1",
    category: "General",
    q: "What services does Solusi Design provide?",
    a: "We provide full-service interior design, room makeovers, furniture sourcing, and consultation for residential and commercial spaces.",
  },
  {
    id: "general-2",
    category: "General",
    q: "How long does a typical project take?",
    a: "Timelines depend on project scope — small rooms 2-4 weeks; full home renovations 6-16 weeks. We'll share a detailed timeline after the initial consult.",
  },
  {
    id: "pricing-1",
    category: "Pricing",
    q: "Do you offer fixed-price packages?",
    a: "Yes — we have fixed packages for moodboard-only, concept+shopping, and full design+implementation. Custom quotes are also available.",
  },
  {
    id: "pricing-2",
    category: "Pricing",
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, UPI, and major credit/debit cards. Payment schedule is split into milestone-based installments.",
  },
  {
    id: "process-1",
    category: "Process",
    q: "What is the first step to start a project?",
    a: "Start by filling our contact form with project details. We will set up an initial call to understand requirements and scope.",
  },
  {
    id: "process-2",
    category: "Process",
    q: "Can I source furniture myself?",
    a: "Absolutely — we can work with items you already own or help you source new pieces. We also provide shopping lists with links.",
  },
];

const categories = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

export default function FAQPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return FAQS.filter((f) => {
      if (activeCategory !== "All" && f.category !== activeCategory) return false;
      if (!q) return true;
      return f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
    });
  }, [query, activeCategory]);

  return (
    <main className="min-h-screen bg-gray-900 py-12 px-4 text-gray-200">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <section className="mb-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-amber-400"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-3 text-gray-300 max-w-2xl mx-auto"
          >
            Quick answers to common questions about our services, process, and pricing.
          </motion.p>
        </section>

        {/* Search + categories */}
        <section className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions or answers..."
                className="w-full rounded-xl border border-gray-700 bg-gray-800 shadow-sm px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <div className="absolute right-3 top-3 text-gray-400 select-none">🔎</div>
            </motion.div>
          </div>

          <div className="flex gap-2 flex-wrap md:justify-end">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                whileTap={{ scale: 0.97 }}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-shadow duration-200 ${
                  activeCategory === cat
                    ? "bg-amber-500 text-gray-900 shadow-amber-200/50"
                    : "bg-gray-800 text-gray-300 border-gray-700"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </section>

        {/* FAQ grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left column: Accordion list */}
          <div>
            <AnimatePresence initial={false} mode="popLayout">
              {filtered.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-6 bg-gray-800 rounded-xl border border-gray-700 shadow-sm text-center text-gray-400"
                >
                  No results. Try a different search or category.
                </motion.div>
              ) : (
                filtered.map((f) => (
                  <motion.div
                    key={f.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    whileHover={{ translateY: -4 }}
                    className="mb-3"
                  >
                    <div className="bg-gray-800 rounded-xl shadow-sm border border-gray-700 overflow-hidden">
                      <button
                        onClick={() => setOpenId((prev) => (prev === f.id ? null : f.id))}
                        className="w-full text-left flex items-center justify-between px-6 py-4"
                      >
                        <div>
                          <div className="text-gray-200 font-semibold">{f.q}</div>
                          <div className="text-xs text-gray-400 mt-1 hidden md:block">{f.category}</div>
                        </div>
                        <motion.span
                          animate={{ rotate: openId === f.id ? 180 : 0 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className="ml-4"
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 9L12 15L18 9"
                              stroke="#FBBF24"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {openId === f.id && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.35 }}
                            className="px-6 pb-5 text-gray-300"
                          >
                            <div className="pt-1 leading-relaxed">{f.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>

          {/* Right column: Helpful tips / contact card */}
          <aside className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-gray-800 rounded-2xl border border-amber-400 flex flex-col justify-between h-full"
            >
              <div>
                <h3 className="text-lg font-semibold text-amber-400">Still have questions?</h3>
                <p className="mt-2 text-sm text-gray-300">
                  If your question isn't listed, reach out to our design team — we're happy to help.
                </p>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <a
                  href="/contact"
                  className="px-4 py-2 rounded-lg bg-amber-500 text-gray-900 text-sm font-medium shadow"
                >
                  Contact us
                </a>
                <a
                  href="/projects"
                  className="px-4 py-2 rounded-lg border border-amber-400 text-amber-400 text-sm font-medium hover:bg-amber-500 hover:text-gray-900 transition"
                >
                  See projects
                </a>
              </div>
            </motion.div>
          </aside>
        </section>
      </div>
    </main>
  );
}
