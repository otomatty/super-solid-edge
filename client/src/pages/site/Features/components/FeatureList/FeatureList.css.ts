import { style, styleVariants } from "@vanilla-extract/css";

export const featureList = style({
  padding: "4rem 2rem",
  backgroundColor: "#f8f9fa",
});

export const title = style({
  fontSize: "2.5rem",
  textAlign: "center",
  marginBottom: "3rem",
  color: "#333",
});

const baseFeature = style({
  display: "flex",
  alignItems: "center",
  marginBottom: "4rem",
  gap: "2rem",

  "@media": {
    "(max-width: 768px)": {
      flexDirection: "column",
    },
  },
});

export const feature = styleVariants({
  odd: [baseFeature],
  even: [
    baseFeature,
    {
      flexDirection: "row-reverse",

      "@media": {
        "(max-width: 768px)": {
          flexDirection: "column",
        },
      },
    },
  ],
});

export const featureContent = style({
  flex: 1,
});

export const featureTitle = style({
  fontSize: "1.8rem",
  marginBottom: "1rem",
  color: "#333",
});

export const featureDescription = style({
  fontSize: "1.1rem",
  lineHeight: "1.6",
  color: "#666",
});

export const featureImage = style({
  maxWidth: "50%",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",

  "@media": {
    "(max-width: 768px)": {
      maxWidth: "100%",
      marginTop: "1rem",
    },
  },
});
