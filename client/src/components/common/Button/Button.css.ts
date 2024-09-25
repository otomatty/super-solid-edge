import { style } from "@vanilla-extract/css";

export const buttonRoot = style({
  background: "linear-gradient(90deg, #4b6cb7, #182848)",
  color: "white",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background 0.3s ease",
  ":hover": {
    background: "linear-gradient(90deg, #182848, #4b6cb7)",
  },
  ":active": {
    background: "linear-gradient(90deg, #1a1a1a, #4b4b4b)",
  },
});
