// https://kobalte.dev/docs/core/components/dialog
// プライマリ ウィンドウまたは別のダイアログ ウィンドウにオーバーレイされるウィンドウ。
// モーダル ダイアログの背後にあるコンテンツは不活性であるため、ユーザーはそれを操作できません。

import { Dialog } from "@kobalte/core";
import { JSX } from "solid-js";
import {
  dialogContent,
  dialogOverlay,
  dialogTitle,
  dialogDescription,
  dialogCloseButton,
} from "./Dialog.css";

interface MyDialogProps {
  trigger: JSX.Element;
  title: string;
  description: string;
  children: JSX.Element;
}

export const MyDialog = (props: MyDialogProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>{props.trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class={dialogOverlay} />
        <Dialog.Content class={dialogContent}>
          <Dialog.Title class={dialogTitle}>{props.title}</Dialog.Title>
          <Dialog.Description class={dialogDescription}>
            {props.description}
          </Dialog.Description>
          {props.children}
          <Dialog.CloseButton class={dialogCloseButton}>
            Close
          </Dialog.CloseButton>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
