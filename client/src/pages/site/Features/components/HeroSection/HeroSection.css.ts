import { style } from "@vanilla-extract/css";

export const heroSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "4rem 2rem",
  backgroundColor: "#f0f4f8",
  textAlign: "center",
});

export const title = style({
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "1rem",
});

export const subtitle = style({
  fontSize: "1.5rem",
  color: "#666",
  marginBottom: "1.5rem",
});

export const description = style({
  fontSize: "1.1rem",
  color: "#444",
  maxWidth: "800px",
  lineHeight: "1.6",
});
