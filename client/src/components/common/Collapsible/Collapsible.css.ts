import { style } from "@vanilla-extract/css";

export const collapsibleRoot = style({
  border: "1px solid #ddd",
  borderRadius: "4px",
  overflow: "hidden",
  transition: "border-color 0.3s ease",
  ":hover": {
    borderColor: "#bbb",
  },
});

export const collapsibleTrigger = style({
  background: "linear-gradient(90deg, #4b6cb7, #182848)",
  color: "white",
  padding: "10px 20px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  transition: "background 0.3s ease",
  ":hover": {
    background: "linear-gradient(90deg, #182848, #4b6cb7)",
  },
});

export const collapsibleContent = style({
  padding: "10px 20px",
  background: "#f9f9f9",
  fontSize: "14px",
  color: "#333",
  lineHeight: "1.5",
  transition: "background 0.3s ease, color 0.3s ease",
});
