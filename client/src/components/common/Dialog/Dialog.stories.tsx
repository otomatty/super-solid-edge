import type { Meta, StoryObj } from "storybook-solidjs";
import { MyDialog } from "./Dialog";

const meta: Meta<typeof MyDialog> = {
  title: "Common/Dialog",
  component: MyDialog,
  args: {
    trigger: <button>Open Dialog</button>,
    title: "Dialog Title",
    description: "This is a description of the dialog.",
    children: <p>This is the main content of the dialog.</p>,
  },
};

export default meta;

type Story = StoryObj<typeof MyDialog>;

export const Default: Story = {};
