//kobalte.dev/docs/core/components/collapsible
// コンテンツを展開/折りたたむインタラクティブなコンポーネント。

import { Collapsible } from "@kobalte/core/collapsible";
import {
  collapsibleRoot,
  collapsibleTrigger,
  collapsibleContent,
} from "./Collapsible.css.ts";

interface MyCollapsibleProps {
  triggerText: string;
  contentText: string;
}

export const MyCollapsible = ({
  triggerText,
  contentText,
}: MyCollapsibleProps) => {
  return (
    <Collapsible class={collapsibleRoot}>
      <Collapsible.Trigger class={collapsibleTrigger}>
        {triggerText}
      </Collapsible.Trigger>
      <Collapsible.Content class={collapsibleContent}>
        {contentText}
      </Collapsible.Content>
    </Collapsible>
  );
};
