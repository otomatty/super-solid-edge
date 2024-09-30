// https://kobalte.dev/docs/core/components/hover-card
// 視覚に障害のないユーザーがリンク先のコンテンツをプレビューできるようにします。

import { HoverCard } from "@kobalte/core";
import { JSX } from "solid-js";
import {
  hoverCardContent,
  hoverCardTrigger,
  hoverCardArrow,
} from "./HoverCard.css";

interface MyHoverCardProps {
  trigger: JSX.Element;
  content: JSX.Element;
}

export const MyHoverCard = (props: MyHoverCardProps) => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger class={hoverCardTrigger}>
        {props.trigger}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content class={hoverCardContent}>
          <HoverCard.Arrow class={hoverCardArrow} />
          {props.content}
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
