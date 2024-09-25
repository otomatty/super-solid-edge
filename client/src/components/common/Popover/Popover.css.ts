import { style } from "@vanilla-extract/css";

export const popoverTrigger = style({
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

export const popoverContent = style({
  background: "white",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "16px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
  maxWidth: "300px",
});

export const popoverHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px",
});

export const popoverTitle = style({
  fontSize: "18px",
  fontWeight: "bold",
  color: "#333",
});

export const popoverCloseButton = style({
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "#999",
  ":hover": {
    color: "#333",
  },
});

export const popoverDescription = style({
  fontSize: "14px",
  color: "#666",
  lineHeight: "1.5",
});
