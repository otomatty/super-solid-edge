import type { Meta, StoryObj } from "storybook-solidjs";
import { MyPopover } from "./Popover";

const meta: Meta<typeof MyPopover> = {
  title: "Common/Popover",
  component: MyPopover,
  args: {
    triggerText: "Learn more",
    titleText: "About Kobalte",
    descriptionText:
      "A UI toolkit for building accessible web apps and design systems with SolidJS.",
  },
};

export default meta;

type Story = StoryObj<typeof MyPopover>;

export const Default: Story = {};
