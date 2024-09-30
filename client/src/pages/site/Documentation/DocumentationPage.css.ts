import { style } from "@vanilla-extract/css";

export const documentationPage = style({
  display: "flex",
  minHeight: "100vh",
});

export const content = style({
  flex: 1,
  padding: "2rem",
  overflowY: "auto",
});
