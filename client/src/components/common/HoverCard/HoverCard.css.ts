import { style } from "@vanilla-extract/css";

export const hoverCardTrigger = style({
  // スタイルは必要に応じて調整してください
});

export const hoverCardContent = style({
  backgroundColor: "white",
  borderRadius: "6px",
  padding: "20px",
  width: "300px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
});

export const hoverCardArrow = style({
  fill: "white",
});
