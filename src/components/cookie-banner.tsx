"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const STORAGE_KEY = "bernays-cookies-ok"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
    }
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, "1")
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-[60] rounded-2xl border p-4 flex items-start gap-4"
          style={{
            background: "var(--page-card)",
            borderColor: "var(--page-border)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          <div className="flex-1 min-w-0">
            <p className="text-[13px] leading-relaxed" style={{ color: "var(--page-text-muted)" }}>
              Usamos cookies e armazenamento local para preferências de tema e sessão.{" "}
              <Link
                href="/privacidade"
                className="text-brand hover:underline font-medium"
              >
                Política de privacidade →
              </Link>
            </p>
          </div>
          <button
            onClick={accept}
            className="shrink-0 bg-brand hover:bg-brand-hover text-white text-[13px] font-semibold px-4 py-2 rounded-xl transition-colors duration-150"
          >
            Aceitar
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
