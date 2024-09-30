import { style } from "@vanilla-extract/css";

export const sidebar = style({
  width: "250px",
  backgroundColor: "#f8f9fa",
  borderRight: "1px solid #e9ecef",
  padding: "2rem 1rem",
  overflowY: "auto",
});

export const logo = style({
  marginBottom: "2rem",
  textAlign: "center",
});

export const logoImage = style({
  maxWidth: "150px",
});

export const nav = style({
  display: "flex",
  flexDirection: "column",
});

export const navItem = style({
  marginBottom: "0.5rem",
});

export const navLink = style({
  display: "block",
  padding: "0.5rem",
  color: "#333",
  textDecoration: "none",
  borderRadius: "4px",
  transition: "background-color 0.3s ease",

  ":hover": {
    backgroundColor: "#e9ecef",
  },
});
