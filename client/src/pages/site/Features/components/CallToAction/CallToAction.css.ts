import { style } from "@vanilla-extract/css";

export const callToAction = style({
  padding: "6rem 2rem",
  backgroundColor: "#f0f4f8",
  textAlign: "center",
});

export const content = style({
  maxWidth: "800px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1.5rem",
  color: "#333",
});

export const description = style({
  fontSize: "1.2rem",
  marginBottom: "2rem",
  color: "#666",
  lineHeight: "1.6",
});

export const buttonContainer = style({
  display: "flex",
  justifyContent: "center",
  gap: "1rem",

  "@media": {
    "(max-width: 600px)": {
      flexDirection: "column",
      alignItems: "center",
    },
  },
});

export const button = style({
  padding: "0.8rem 1.5rem",
  fontSize: "1.1rem",
  fontWeight: "bold",
  borderRadius: "4px",
  textDecoration: "none",
  transition: "background-color 0.3s ease",
});

export const primaryButton = style({
  backgroundColor: "#007bff",
  color: "#fff",

  ":hover": {
    backgroundColor: "#0056b3",
  },
});

export const secondaryButton = style({
  backgroundColor: "#fff",
  color: "#007bff",
  border: "2px solid #007bff",

  ":hover": {
    backgroundColor: "#e6f2ff",
  },
});
