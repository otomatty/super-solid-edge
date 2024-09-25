import type { Meta, StoryObj } from "storybook-solidjs";
import { MyAlert } from "./Alert";

const meta: Meta<typeof MyAlert> = {
  title: "Common/Alert",
  component: MyAlert,
  args: {
    title: "Alert Title",
    description: "This is an alert description.",
  },
};

export default meta;

type Story = StoryObj<typeof MyAlert>;

export const Default: Story = {};
