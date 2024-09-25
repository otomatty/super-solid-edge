import { style } from "@vanilla-extract/css";

export const comboboxRoot = style({
  position: "relative",
  width: "100%",
  maxWidth: "300px",
});

export const comboboxItem = style({
  fontSize: "16px",
  lineHeight: "1",
  color: "hsl(240 4% 16%)",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "32px",
  padding: "0 8px",
  position: "relative",
  userSelect: "none",
  outline: "none",
});

export const comboboxInput = style({
  appearance: "none",
  display: "inline-flex",
  minWidth: "0",
  minHeight: "40px",
  paddingLeft: "16px",
  fontSize: "16px",
  background: "transparent",
  borderTopLeftRadius: "6px",
  borderBottomLeftRadius: "6px",
  outline: "none",
  "::placeholder": {
    color: "hsl(240 4% 46%)",
  },
});

export const comboboxListbox = style({
  position: "absolute",
  top: "100%",
  left: "0",
  right: "0",
  background: "#fff",
  border: "1px solid #ddd",
  borderRadius: "4px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  zIndex: 10,
  maxHeight: "200px",
  overflowY: "auto",
  padding: "8px",
  ":focus": {
    outline: "none",
  },
});

export const comboboxOption = style({
  fontSize: "16px",
  lineHeight: "1",
  color: "hsl(240 4% 16%)",
  borderRadius: "4px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "32px",
  padding: "0 8px",
  position: "relative",
  userSelect: "none",
  outline: "none",
  transition: "background 0.3s ease",
  ":hover": {
    background: "#f0f0f0",
  },
});

export const comboboxControl = style({
  display: "inline-flex",
  justifyContent: "space-between",
  width: "200px",
  borderRadius: "6px",
  fontSize: "16px",
  lineHeight: "1",
  outline: "none",
  backgroundColor: "white",
  border: "1px solid hsl(240 6% 90%)",
  color: "hsl(240 4% 16%)",
  transition: "border-color 250ms, color 250ms",
});

export const comboboxTrigger = style({
  appearance: "none",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  width: "auto",
  outline: "none",
  borderTopRightRadius: "6px",
  borderBottomRightRadius: "6px",
  padding: "0 10px",
  backgroundColor: "hsl(240 5% 96%)",
  borderLeft: "1px solid hsl(240 6% 90%)",
  color: "hsl(240 4% 16%)",
  fontSize: "16px",
  lineHeight: "0",
  transition: "250ms background-color",
});

export const comboboxIcon = style({
  height: "20px",
  width: "20px",
  flex: "0 0 20px",
});

export const comboboxContent = style({
  backgroundColor: "white",
  borderRadius: "6px",
  border: "1px solid hsl(240 6% 90%)",
  boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  transformOrigin: "var(--kb-combobox-content-transform-origin)",
  animation: "contentHide 250ms ease-in forwards",
});

export const comboboxItemIndicator = style({
  height: "20px",
  width: "20px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const comboboxDescription = style({
  marginTop: "8px",
  color: "hsl(240 5% 26%)",
  fontSize: "12px",
  userSelect: "none",
});

export const comboboxErrorMessage = style({
  marginTop: "8px",
  color: "hsl(0 72% 51%)",
  fontSize: "12px",
  userSelect: "none",
});

export const comboboxSection = style({
  padding: "8px 0 0 8px",
  fontSize: "14px",
  lineHeight: "32px",
  color: "hsl(240 4% 46%)",
});
