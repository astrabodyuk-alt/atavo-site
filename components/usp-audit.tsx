"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AccordionItem {
  id: string
  number: string
  title: string
  content: string
}

const items: AccordionItem[] = [
  {
    id: "deep-dive",
    number: "01",
    title: "Business Deep-Dive",
    content:
      "We take the time to understand your goals, your customers, and your vision. No guesswork. Every decision is backed by real insight into what makes your business unique.",
  },
  {
    id: "competitor",
    number: "02",
    title: "Competitor Analysis",
    content:
      "We research every competitor in your market. We identify what they're doing well, where they're falling short, and where the opportunities are for you to stand out.",
  },
  {
    id: "positioning",
    number: "03",
    title: "Strategic Positioning",
    content:
      "We find the gaps where you can dominate online. You receive a full audit report worth £299 with clear, actionable recommendations, included free with every project.",
  },
]

export default function USPAudit() {
  const [activeId, setActiveId] = useState<string | null>("deep-dive")
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section id="usp-audit" className="bg-[#f7f7f7] pt-16 md:pt-20 pb-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        {/* Label */}
        <p className="text-[#00c47a] text-xs font-semibold tracking-[0.3em] uppercase font-body">
          WHAT MAKES US DIFFERENT
        </p>

        {/* Header */}
        <div className="mt-4 mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-[#0d0d0d] leading-tight">
            What makes us different
          </h2>
          <p className="mt-3 text-[#6b6b6b] text-lg max-w-xl">
            Every project starts with a deep understanding of your business.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full space-y-0">
          {items.map((item) => {
            const isActive = activeId === item.id
            const isHovered = hoveredId === item.id

            return (
              <div key={item.id}>
                <motion.button
                  onClick={() => setActiveId(isActive ? null : item.id)}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="w-full group relative"
                  initial={false}
                >
                  <div className="flex items-center gap-6 py-5 px-1">
                    {/* Number with animated circle */}
                    <div className="relative flex items-center justify-center w-10 h-10">
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: "#00c47a" }}
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : isHovered ? 0.85 : 0,
                          opacity: isActive ? 1 : isHovered ? 0.15 : 0,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      />
                      <motion.span
                        className="relative z-10 text-sm font-medium tracking-wide"
                        animate={{
                          color: isActive ? "#ffffff" : "var(--muted-foreground)",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.number}
                      </motion.span>
                    </div>

                    {/* Title */}
                    <motion.h3
                      className="text-2xl font-medium tracking-tight"
                      animate={{
                        x: isActive || isHovered ? 4 : 0,
                        color: isActive || isHovered ? "var(--foreground)" : "var(--muted-foreground)",
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Animated indicator */}
                    <div className="ml-auto flex items-center gap-3">
                      <motion.div
                        className="flex items-center justify-center w-8 h-8"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                        <motion.svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="text-foreground"
                          animate={{ opacity: isActive || isHovered ? 1 : 0.4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <motion.path
                            d="M8 1V15M1 8H15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            initial={false}
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Static underline */}
                  <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left" initial={false} />
                  {/* Animated foreground underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px origin-left"
                    style={{ backgroundColor: "#00c47a" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive ? 1 : isHovered ? 0.3 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </motion.button>

                {/* Content */}
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        className="pl-16 pr-12 py-6 text-[#6b6b6b] leading-relaxed"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      >
                        {item.content}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#audit-form"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-gray-800 transition-colors duration-200"
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  )
}
