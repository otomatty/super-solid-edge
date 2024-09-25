import { style } from "@vanilla-extract/css";

export const alertRoot = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  borderRadius: "4px",
  marginBottom: "16px",
});

export const alertTitle = style({
  fontSize: "18px",
  fontWeight: "bold",
  marginBottom: "8px",
});

export const alertDescription = style({
  fontSize: "14px",
  lineHeight: "1.5",
});

export const alertCloseButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#721c24",
  ":hover": {
    color: "#491217",
  },
});
