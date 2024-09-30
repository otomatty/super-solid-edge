import { style } from "@vanilla-extract/css";

export const footerSection = style({
  backgroundColor: "#1a1a1a",
  color: "#fff",
  padding: "4rem 2rem 2rem",
});

export const footerContent = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  maxWidth: "1200px",
  margin: "0 auto",
  gap: "2rem",
});

export const footerLogo = style({
  flex: "1 1 300px",
  marginBottom: "2rem",
});

export const footerLogoImage = style({
  width: "150px",
  marginBottom: "1rem",
});

export const footerLogoText = style({
  fontSize: "1rem",
  color: "#ccc",
});

export const footerLinks = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  flex: "2 1 600px",
});

export const footerLinkColumn = style({
  flex: "1 1 200px",
});

export const footerLinkColumnTitle = style({
  fontSize: "1.2rem",
  marginBottom: "1rem",
});

export const footerLink = style({
  display: "block",
  color: "#ccc",
  textDecoration: "none",
  marginBottom: "0.5rem",
  transition: "color 0.3s ease",

  ":hover": {
    color: "#fff",
  },
});

export const footerSocial = style({
  display: "flex",
  gap: "1rem",
  marginTop: "2rem",
});

export const footerSocialLink = style({
  ":hover": {
    opacity: 0.8,
  },
});

export const footerSocialIcon = style({
  width: "24px",
  height: "24px",
  transition: "opacity 0.3s ease",
});

export const footerBottom = style({
  borderTop: "1px solid #333",
  marginTop: "2rem",
  paddingTop: "2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
});

export const footerCopyright = style({
  fontSize: "0.9rem",
  color: "#ccc",
});

export const footerLegalLinks = style({
  display: "flex",
  gap: "1rem",
});

export const footerLegalLink = style({
  fontSize: "0.9rem",
  color: "#ccc",
  textDecoration: "none",
  transition: "color 0.3s ease",

  ":hover": {
    color: "#fff",
  },
});
