import type { Meta, StoryObj } from "storybook-solidjs";
import { MyTooltip } from "./Tooltip";

const meta: Meta<typeof MyTooltip> = {
  title: "Common/Tooltip",
  component: MyTooltip,
  args: {
    triggerText: "Hover me",
    tooltipText: "This is a tooltip",
  },
};

export default meta;

type Story = StoryObj<typeof MyTooltip>;

export const Default: Story = {};
