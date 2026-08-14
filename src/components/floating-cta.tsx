"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://app.bernays.pt"
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
      {/* Desktop pill group — bottom right */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ duration: 0.25, ease }}
            className="fixed bottom-6 right-6 z-50 hidden md:flex items-center gap-2"
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.96 }}>
              <Link
                href="/agenda"
                className="inline-flex items-center gap-1.5 border text-[13px] font-semibold px-4 py-2.5 rounded-full transition-all duration-150 [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:border-brand/40 hover:text-brand"
                style={{
                  background: "var(--page-bg)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
                }}
              >
                Marcar demo
              </Link>
            </motion.div>
            <motion.a
              href={`${APP_URL}/login?signup=1`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold px-5 py-2.5 rounded-full text-[14px] transition-colors duration-150"
              style={{ boxShadow: "0 4px 24px oklch(0.581 0.243 263 / 0.45), 0 2px 8px rgba(0,0,0,0.2)" }}
            >
              Começar
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          </motion.div>
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
            <div className="flex gap-2">
              <Link
                href="/agenda"
                className="flex items-center justify-center border font-semibold py-3 rounded-xl text-[15px] transition-colors duration-150 flex-1 [color:var(--page-text-muted)] [border-color:var(--page-border)] hover:border-brand/40 hover:text-brand"
              >
                Marcar demo
              </Link>
              <a
                href={`${APP_URL}/login?signup=1`}
                className="flex items-center justify-center gap-2 bg-brand hover:bg-brand-hover text-white font-semibold py-3 rounded-xl text-[15px] transition-colors duration-150 flex-[2]"
              >
                Começar
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
