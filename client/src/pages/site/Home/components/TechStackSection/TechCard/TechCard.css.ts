import { style } from "@vanilla-extract/css";

export const techCard = style({
  backgroundColor: "#fff",
  borderRadius: "8px",
  padding: "1.5rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const icon = style({
  width: "64px",
  height: "64px",
  marginBottom: "1rem",
});

export const name = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#333",
});

export const description = style({
  fontSize: "1rem",
  color: "#666",
});
