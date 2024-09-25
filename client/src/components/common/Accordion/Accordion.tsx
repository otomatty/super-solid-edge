import { Accordion } from "@kobalte/core/accordion";
import {
  accordionItem,
  accordionHeader,
  accordionTrigger,
  accordionContent,
} from "./Accordion.css.ts";

interface MyAccordionProps {
  items: { title: string; content: string }[];
}

export const MyAccordion = ({ items }: MyAccordionProps) => {
  return (
    <Accordion multiple>
      {items.map((item, index) => (
        <Accordion.Item value={index.toString()} class={accordionItem}>
          <Accordion.Header class={accordionHeader}>
            <Accordion.Trigger class={accordionTrigger}>
              {item.title}
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content class={accordionContent}>
            {item.content}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
