import { style } from "@vanilla-extract/css";

export const heroSection = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "2rem",
  backgroundImage: "url('/images/hero-background.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",

  "::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  },
});

export const content = style({
  position: "relative",
  zIndex: 1,
});
