import { style } from "@vanilla-extract/css";

export const accordionItem = style({
  borderBottom: "1px solid #e0e0e0",
  transition: "border-color 0.3s ease",
  ":hover": {
    borderColor: "#b0b0b0",
  },
});

export const accordionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
  background: "linear-gradient(90deg, #f3f4f6, #e5e7eb)",
  transition: "background 0.3s ease",
  ":hover": {
    background: "linear-gradient(90deg, #e5e7eb, #f3f4f6)",
  },
});

export const accordionTrigger = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: "14px",
  border: "none",
  fontWeight: "600",
  textAlign: "left",
  outline: "none",
  fontSize: "18px",
  color: "#1f2937",
  transition: "color 0.3s ease",
  ":hover": {
    color: "#111827",
  },
});

export const accordionContent = style({
  padding: "12px 20px",
  background: "#ffffff",
  fontSize: "16px",
  color: "#4b5563",
  lineHeight: "1.6",
  transition: "background 0.3s ease, color 0.3s ease",
});
