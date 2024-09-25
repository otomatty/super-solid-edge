// https://kobalte.dev/docs/core/components/checkbox

import { createSignal } from "solid-js";
import { Checkbox } from "@kobalte/core/checkbox";
import { BiSolidCheckCircle } from "solid-icons/bi";
import {
  checkbox,
  checkboxInput,
  checkboxControl,
  checkboxIndicator,
  checkboxLabel,
} from "./Checkbox.css.ts";

interface MyCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const MyCheckbox = ({ label }: MyCheckboxProps) => {
  const [checked, setChecked] = createSignal(false);
  return (
    <Checkbox class={checkbox} checked={checked()} onChange={setChecked}>
      <Checkbox.Input class={checkboxInput} />
      <Checkbox.Control class={checkboxControl}>
        <Checkbox.Indicator class={checkboxIndicator}>
          <BiSolidCheckCircle size={20} />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.Label class={checkboxLabel}>{label}</Checkbox.Label>

      {/* ここからは独自のコンポーネントで使用する時に使う */}
      {/* チェックした時に何か表示することもできる */}
      {/* <p>You are {checked() ? "subscribed" : "unsubscribed"}.</p> */}

      {/* チェックボックスの説明を表示することもできる */}
      {/* <Checkbox.Description>
        You will receive our weekly newsletter.
      </Checkbox.Description> */}
    </Checkbox>
  );
};
