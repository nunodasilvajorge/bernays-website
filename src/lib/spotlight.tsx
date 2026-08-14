"use client"

import { useRef, useState, useCallback } from "react"

export function useSpotlight(color: string, radiusPx = 280) {
  const ref = useRef<HTMLDivElement>(null)
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null)

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const onMouseEnter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.borderColor = `${color}55`
    e.currentTarget.style.boxShadow = `0 0 32px ${color}18, 0 8px 32px rgba(0,0,0,0.08)`
  }, [color])

  const onMouseLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    setSpot(null)
    e.currentTarget.style.borderColor = "var(--page-border)"
    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"
  }, [])

  const spotOverlay = spot ? (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background: `radial-gradient(${radiusPx}px circle at ${spot.x}px ${spot.y}px, ${color}14 0%, transparent 70%)`,
      }}
    />
  ) : null

  return { ref, onMouseMove, onMouseEnter, onMouseLeave, spotOverlay }
}
