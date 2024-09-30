// https://kobalte.dev/docs/core/components/dropdown-menu
// ボタンによってトリガーされる一連のアクションや機能などのメニューをユーザーに表示します。

import { DropdownMenu } from "@kobalte/core";
import { JSX } from "solid-js";
import {
  dropdownMenuContent,
  dropdownMenuItem,
  dropdownMenuTrigger,
} from "./DropdownMenu.css";

interface MyDropdownMenuProps {
  trigger: JSX.Element;
  items: { label: string; onSelect: () => void }[];
}

export const MyDropdownMenu = (props: MyDropdownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class={dropdownMenuTrigger}>
        {props.trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content class={dropdownMenuContent}>
          {props.items.map((item) => (
            <DropdownMenu.Item
              class={dropdownMenuItem}
              onSelect={item.onSelect}
            >
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
