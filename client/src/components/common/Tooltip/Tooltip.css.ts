import { style } from "@vanilla-extract/css";

export const tooltipTrigger = style({
  background: "linear-gradient(90deg, #4b6cb7, #182848)",
  color: "white",
  padding: "8px 12px",
  borderRadius: "4px",
  cursor: "pointer",
  transition: "background 0.3s ease",
  ":hover": {
    background: "linear-gradient(90deg, #182848, #4b6cb7)",
  },
});

export const tooltipContent = style({
  background: "black",
  color: "white",
  padding: "8px",
  borderRadius: "4px",
  fontSize: "14px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
});
