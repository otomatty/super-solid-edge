import { style } from "@vanilla-extract/css";

export const contextMenuTrigger = style({
  // スタイルは必要に応じて調整してください
});

export const contextMenuContent = style({
  minWidth: "220px",
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "5px",
  boxShadow:
    "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export const contextMenuItem = style({
  fontSize: "13px",
  lineHeight: "1",
  color: "violet11",
  borderRadius: "3px",
  display: "flex",
  alignItems: "center",
  height: "25px",
  padding: "0 5px",
  position: "relative",
  paddingLeft: "25px",
  userSelect: "none",
  outline: "none",
  ":hover": {
    backgroundColor: "violet9",
    color: "violet1",
  },
});
