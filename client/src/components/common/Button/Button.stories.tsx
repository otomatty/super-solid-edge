import type { Meta, StoryObj } from "storybook-solidjs";
import { MyButton } from "./Button";

const meta: Meta<typeof MyButton> = {
  title: "Common/Button",
  component: MyButton,
  args: {
    text: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
};

export default meta;

type Story = StoryObj<typeof MyButton>;

export const Default: Story = {};
