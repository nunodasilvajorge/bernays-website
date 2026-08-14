import { ImageResponse } from "next/og"
import { modules } from "@/lib/features-data"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

type Props = { params: Promise<{ slug: string }> }

export default async function OgImage({ params }: Props) {
  const { slug } = await params
  const mod = modules.find((m) => m.id === slug)

  const color = mod?.color ?? "#6366f1"
  const label = mod?.label ?? "Bernays"
  const tagline = mod?.tagline ?? "Produto"
  const description = mod?.description ?? "O sistema operativo da tua agência de RP."

  return new ImageResponse(
    <div
      style={{
        background: "#07080e",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "60px 68px",
      }}
    >
      {/* Top row: logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 48,
            height: 48,
            background: "#4045c5",
            borderRadius: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
        <span style={{ color: "#ffffff", fontSize: 30, fontWeight: 700, letterSpacing: "-0.02em" }}>
          Bernays
        </span>
      </div>

      {/* Bottom: module content */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* Accent bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
          <div style={{ width: 48, height: 4, background: color, borderRadius: 99 }} />
          <span style={{ color, fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {tagline}
          </span>
        </div>

        <h1
          style={{
            color: "#ffffff",
            fontSize: 76,
            fontWeight: 900,
            lineHeight: 1.0,
            margin: 0,
            marginBottom: 28,
            letterSpacing: "-0.04em",
          }}
        >
          {label}
        </h1>

        <p
          style={{
            color: "#8b8fa8",
            fontSize: 24,
            lineHeight: 1.4,
            margin: 0,
            maxWidth: "75%",
          }}
        >
          {description}
        </p>
      </div>
    </div>,
    size
  )
}
