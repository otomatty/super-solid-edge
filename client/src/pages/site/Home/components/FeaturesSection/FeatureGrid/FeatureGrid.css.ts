import { style } from "@vanilla-extract/css";

export const featureGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
});
