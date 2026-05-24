import { ImageResponse } from "next/og"

export const alt = "Bernays — O sistema nervoso da tua agência de RP"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          backgroundColor: "#07080e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top border accent */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, backgroundColor: "#2257ff", display: "flex" }} />

        {/* Logo mark */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: "linear-gradient(135deg, #0a66ff 0%, #5b8dff 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 800,
            color: "white",
            marginBottom: 32,
          }}
        >
          B
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1,
            textAlign: "center",
            color: "white",
            marginBottom: 12,
          }}
        >
          O sistema nervoso
        </div>
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            letterSpacing: "-0.045em",
            lineHeight: 1,
            textAlign: "center",
            color: "#6b9fff",
            marginBottom: 40,
          }}
        >
          da tua agência de RP.
        </div>

        {/* Sub */}
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          CRM · Delivery · Faturação · RH · Tesouraria · 103 funcionalidades
        </div>

        {/* Bottom: bernays.pt */}
        <div style={{ position: "absolute", bottom: 36, fontSize: 16, color: "rgba(255,255,255,0.2)", letterSpacing: "0.05em" }}>
          bernays.pt
        </div>
      </div>
    ),
    { ...size }
  )
}
