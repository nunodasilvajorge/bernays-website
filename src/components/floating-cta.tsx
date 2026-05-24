"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DEMO_URL = process.env.NEXT_PUBLIC_DEMO_URL ?? "https://demo.bernays.pt"
const ease = [0.22, 1, 0.36, 1] as const

export function FloatingCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 500)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Desktop pill — bottom right */}
      <AnimatePresence>
        {visible && (
          <motion.a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            className="fixed bottom-6 right-6 z-50 hidden md:inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-5 py-3 rounded-full text-[14px] transition-colors duration-150"
            style={{ boxShadow: "0 4px 24px oklch(0.581 0.243 263 / 0.45), 0 2px 8px rgba(0,0,0,0.2)" }}
          >
            Ver demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Mobile sticky bar — bottom full-width */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.25, ease }}
            className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t px-4 py-3"
            style={{
              background: "var(--page-bg)",
              borderColor: "var(--page-border)",
              backdropFilter: "blur(16px)",
              paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
            }}
          >
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-brand hover:bg-brand-hover text-white font-semibold py-3 rounded-xl text-[15px] transition-colors duration-150"
            >
              Ver demo gratuitamente
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
