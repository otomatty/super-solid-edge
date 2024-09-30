import { style } from "@vanilla-extract/css";

export const stepCard = style({
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});

export const stepNumber = style({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: "#007bff",
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
});

export const stepTitle = style({
  fontSize: "1.25rem",
  fontWeight: "bold",
  marginBottom: "0.5rem",
  color: "#333",
});

export const stepDescription = style({
  fontSize: "1rem",
  color: "#666",
  lineHeight: "1.5",
});
