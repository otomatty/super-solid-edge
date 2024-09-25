// https://kobalte.dev/docs/core/components/popover
// アンカー要素を基準に配置されたポップオーバー。

import { Popover } from "@kobalte/core";
import { BiSolidXCircle } from "solid-icons/bi";
import {
  popoverTrigger,
  popoverContent,
  popoverHeader,
  popoverTitle,
  popoverCloseButton,
  popoverDescription,
} from "./Popover.css.ts";

interface MyPopoverProps {
  triggerText: string;
  titleText: string;
  descriptionText: string;
}

export const MyPopover = ({
  triggerText,
  titleText,
  descriptionText,
}: MyPopoverProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger class={popoverTrigger}>{triggerText}</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content class={popoverContent} data-expanded>
          <Popover.Arrow />
          <div class={popoverHeader}>
            <Popover.Title class={popoverTitle}>{titleText}</Popover.Title>
            <Popover.CloseButton class={popoverCloseButton} aria-label="Close">
              <BiSolidXCircle size={20} /> {/* アイコンサイズを変更 */}
            </Popover.CloseButton>
          </div>
          <Popover.Description class={popoverDescription}>
            {descriptionText}
          </Popover.Description>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
