import { style } from "@vanilla-extract/css";

export const featureOverview = style({
  padding: "4rem 2rem",
  backgroundColor: "#fff",
});

export const title = style({
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "3rem",
  color: "#333",
});

export const featureGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
});

export const featureItem = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const featureIcon = style({
  fontSize: "3rem",
  marginBottom: "1rem",
});

export const featureTitle = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#333",
});
