import { style } from "@vanilla-extract/css";

export const callToAction = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
});

export const button = style({
  padding: "0.75rem 1.5rem",
  textDecoration: "none",
  borderRadius: "4px",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  fontSize: "1.1rem",
});

export const primaryButton = style({
  backgroundColor: "#007bff",
  color: "#fff",
  border: "2px solid #007bff",

  ":hover": {
    backgroundColor: "#0056b3",
    borderColor: "#0056b3",
  },
});

export const secondaryButton = style({
  backgroundColor: "transparent",
  color: "#007bff",
  border: "2px solid #007bff",

  ":hover": {
    backgroundColor: "rgba(0, 123, 255, 0.1)",
  },
});
