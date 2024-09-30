import { style } from "@vanilla-extract/css";

export const dropdownMenuTrigger = style({
  padding: "10px 16px",
  borderRadius: "4px",
  backgroundColor: "#f3f4f6",
  cursor: "pointer",
  transition: "background-color 0.2s",
  ":hover": {
    backgroundColor: "#e5e7eb",
  },
});

export const dropdownMenuContent = style({
  minWidth: "220px",
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "5px",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const dropdownMenuItem = style({
  fontSize: "14px",
  lineHeight: "1",
  color: "#374151",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "0 10px",
  position: "relative",
  userSelect: "none",
  outline: "none",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "#f3f4f6",
  },
});
