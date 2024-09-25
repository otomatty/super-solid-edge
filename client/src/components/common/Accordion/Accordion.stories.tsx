import type { Meta, StoryObj } from "storybook-solidjs";
import { MyAccordion } from "./Accordion";

const meta: Meta<typeof MyAccordion> = {
  title: "Common/Accordion",
  component: MyAccordion,
  args: {
    items: [
      { title: "Section 1", content: "Content for section 1" },
      { title: "Section 2", content: "Content for section 2" },
      { title: "Section 3", content: "Content for section 3" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof MyAccordion>;

export const Default: Story = {};
