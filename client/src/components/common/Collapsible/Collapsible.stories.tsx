import type { Meta, StoryObj } from "storybook-solidjs";
import { MyCollapsible } from "./Collapsible";

const meta: Meta<typeof MyCollapsible> = {
  title: "Common/Collapsible",
  component: MyCollapsible,
  args: {
    triggerText: "Toggle Content",
    contentText: "This is the collapsible content.",
  },
};

export default meta;

type Story = StoryObj<typeof MyCollapsible>;

export const Default: Story = {};
