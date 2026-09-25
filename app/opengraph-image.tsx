import { ImageResponse } from "next/og";

export const alt = "InvierteDesdeCero — Aprende a invertir desde cero";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "linear-gradient(135deg, #081527 0%, #142c48 55%, #1c3a5e 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-end", gap: 10 }}>
          <div style={{ width: 26, height: 64, borderRadius: 6, background: "#5ecb99" }} />
          <div style={{ width: 26, height: 108, borderRadius: 6, background: "#33ae7c" }} />
          <div style={{ width: 26, height: 156, borderRadius: 6, background: "#1f9463" }} />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          InvierteDesdeCero
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 32,
            color: "#a9bfd5",
            maxWidth: 920,
            lineHeight: 1.4,
          }}
        >
          Aprende a invertir desde cero: interés compuesto, mercados y
          comparativa de brokers en España.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 44,
            fontSize: 24,
            fontWeight: 600,
            color: "#5ecb99",
            background: "rgba(94, 203, 153, 0.14)",
            padding: "14px 28px",
            borderRadius: 999,
            alignSelf: "flex-start",
          }}
        >
          Educación financiera, sin humo
        </div>
      </div>
    ),
    { ...size }
  );
}
