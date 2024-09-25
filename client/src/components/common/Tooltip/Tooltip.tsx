import { Tooltip } from "@kobalte/core";
import { tooltipTrigger, tooltipContent } from "./Tooltip.css.ts";

interface MyTooltipProps {
  triggerText: string;
  tooltipText: string;
}

export const MyTooltip = ({ triggerText, tooltipText }: MyTooltipProps) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger class={tooltipTrigger}>{triggerText}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content class={tooltipContent}>
          {tooltipText}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};
