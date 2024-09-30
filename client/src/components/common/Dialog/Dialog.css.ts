import { style } from "@vanilla-extract/css";

export const dialogOverlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  inset: 0,
});

export const dialogContent = style({
  backgroundColor: "white",
  borderRadius: "6px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  padding: "25px",
});

export const dialogTitle = style({
  margin: 0,
  fontWeight: 500,
  color: "var(--mauve12)",
  fontSize: "17px",
});

export const dialogDescription = style({
  margin: "10px 0 20px",
  color: "var(--mauve11)",
  fontSize: "15px",
  lineHeight: 1.5,
});

export const dialogCloseButton = style({
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "25px",
  width: "25px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "var(--violet11)",
  position: "absolute",
  top: "10px",
  right: "10px",
});
