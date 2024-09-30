import { style } from "@vanilla-extract/css";

export const useCases = style({
  padding: "4rem 2rem",
  backgroundColor: "#fff",
});

export const title = style({
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "3rem",
  color: "#333",
});

export const caseGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
});

export const caseItem = style({
  backgroundColor: "#f8f9fa",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease",

  ":hover": {
    transform: "translateY(-5px)",
  },
});

export const caseIcon = style({
  fontSize: "3rem",
  marginBottom: "1rem",
  display: "block",
});

export const caseTitle = style({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
  color: "#333",
});

export const caseDescription = style({
  fontSize: "1rem",
  color: "#666",
  lineHeight: "1.6",
});
