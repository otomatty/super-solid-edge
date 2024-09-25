import { Button } from "@kobalte/core/button";
import { buttonRoot } from "./Button.css.ts";

interface MyButtonProps {
  text: string;
  onClick: () => void;
}

export const MyButton = ({ text, onClick }: MyButtonProps) => {
  return (
    <Button class={buttonRoot} onClick={onClick}>
      {text}
    </Button>
  );
};
