import { style } from "@vanilla-extract/css";

export const checkbox = style({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

export const checkboxInput = style({
  display: "none",
});

export const checkboxControl = style({
  width: "20px",
  height: "20px",
  border: "2px solid #4b6cb7",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "8px",
  transition: "background-color 0.3s ease, border-color 0.3s ease",
  ":hover": {
    borderColor: "#182848",
  },
});

export const checkboxIndicator = style({
  color: "#4b6cb7",
});

export const checkboxLabel = style({
  fontSize: "16px",
  color: "#333",
});
