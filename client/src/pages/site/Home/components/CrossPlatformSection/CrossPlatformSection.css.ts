import { style } from "@vanilla-extract/css";

export const crossPlatformSection = style({
  padding: "4rem 2rem",
  backgroundColor: "#f0f4f8",
});

export const title = style({
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "1rem",
  color: "#333",
});

export const subtitle = style({
  fontSize: "1.2rem",
  textAlign: "center",
  marginBottom: "3rem",
  color: "#666",
});

export const platformGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
});
