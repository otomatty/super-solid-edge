import { style } from "@vanilla-extract/css";

export const techList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "2rem",
  justifyContent: "center",
});
