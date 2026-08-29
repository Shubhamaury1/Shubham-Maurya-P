import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c4a6e",
          color: "white",
          padding: "40px 60px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 24px",
            borderRadius: "9999px",
            backgroundColor: "rgba(56, 189, 248, 0.2)",
            border: "1px solid #38bdf8",
            color: "#38bdf8",
            fontSize: "24px",
            fontWeight: 600,
            marginBottom: "24px",
          }}
        >
          Portfolio &amp; Engineering
        </div>
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            textAlign: "center",
            color: "#ffffff",
            marginBottom: "16px",
          }}
        >
          Shubham Maurya
        </div>
        <div
          style={{
            fontSize: "30px",
            color: "#bae6fd",
            textAlign: "center",
            maxWidth: "900px",
            marginBottom: "32px",
          }}
        >
          Full-Stack Software Developer &amp; Data Analyst
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "22px",
            color: "#7dd3fc",
          }}
        >
          <span>React</span> • <span>Next.js</span> • <span>Node.js</span> • <span>Python</span> • <span>.NET</span> • <span>MongoDB</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
