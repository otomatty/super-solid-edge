import { style } from "@vanilla-extract/css";

export const gettingStartedSection = style({
  padding: "4rem 2rem",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

export const stepsContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
  marginBottom: "3rem",
  width: "100%",
  maxWidth: "1200px",
});

export const ctaButton = style({
  display: "inline-block",
  padding: "1rem 2rem",
  backgroundColor: "#007bff",
  color: "#fff",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  transition: "background-color 0.3s ease",

  ":hover": {
    backgroundColor: "#0056b3",
  },
});
