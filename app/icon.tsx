import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 2,
          background: "#142c48",
          borderRadius: 9,
          padding: "0 5px 6px",
        }}
      >
        <div style={{ width: 4, height: 8, borderRadius: 1, background: "#5ecb99" }} />
        <div style={{ width: 4, height: 13, borderRadius: 1, background: "#33ae7c" }} />
        <div style={{ width: 4, height: 19, borderRadius: 1, background: "#1f9463" }} />
      </div>
    ),
    { ...size }
  );
}
