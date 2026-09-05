import { ImageResponse } from "next/og";

export const alt = "ISTRIADE GROUP LLC — AI software, intelligent systems and specialized digital services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#071015", color: "#f4f7f8", padding: "72px", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, color: "#64d8da", fontSize: 26, letterSpacing: 5 }}>ISTRIADE GROUP LLC</div>
      <div style={{ display: "flex", maxWidth: 930, fontSize: 70, lineHeight: 1.03, letterSpacing: -2 }}>AI software, intelligent systems and specialized digital services for business.</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#9baab4" }}><span>Technology · AI · Digital Systems</span><span>istriadegroup.com</span></div>
    </div>,
    size,
  );
}
