// https://kobalte.dev/docs/core/components/context-menu
// 右クリックまたは長押しによってトリガーされる、ポインターにあるメニューを表示します。

import { ContextMenu } from "@kobalte/core";
import { JSX } from "solid-js";
import {
  contextMenuContent,
  contextMenuItem,
  contextMenuTrigger,
} from "./ContextMenu.css";

interface MyContextMenuProps {
  children: JSX.Element;
  items: { label: string; onSelect: () => void }[];
}

export const MyContextMenu = (props: MyContextMenuProps) => {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger class={contextMenuTrigger}>
        {props.children}
      </ContextMenu.Trigger>
      <ContextMenu.Portal>
        <ContextMenu.Content class={contextMenuContent}>
          {props.items.map((item) => (
            <ContextMenu.Item class={contextMenuItem} onSelect={item.onSelect}>
              {item.label}
            </ContextMenu.Item>
          ))}
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  );
};
