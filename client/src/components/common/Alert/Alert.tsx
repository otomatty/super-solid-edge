import { Alert } from "@kobalte/core/alert";
import { alertRoot } from "./Alert.css.ts";

export const MyAlert = () => {
  return (
    <Alert class={alertRoot}>Kobalte is going live soon, get ready!</Alert>
  );
};
