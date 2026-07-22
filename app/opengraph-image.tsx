import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          background: "#0a0e14",
          color: "#f2f4f6",
        }}
      >
        <div style={{ fontSize: 30, color: "#5b7cfa", letterSpacing: 6, textTransform: "uppercase" }}>
          Filmmaker &amp; Director
        </div>
        <div style={{ fontSize: 96, fontWeight: 600, marginTop: 24 }}>
          Paweł Krauch
        </div>
        <div style={{ fontSize: 32, color: "rgba(242,244,246,0.6)", marginTop: 24, maxWidth: 900 }}>
          Filmmaker capturing brand stories that move.
        </div>
      </div>
    ),
    { ...size }
  );
}
