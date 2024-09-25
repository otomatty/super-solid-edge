import type { Meta, StoryObj } from "storybook-solidjs";
import { MyCheckbox } from "./Checkbox";

const meta: Meta<typeof MyCheckbox> = {
  title: "Common/Checkbox",
  component: MyCheckbox,
  args: {
    label: "Subscribe",
    checked: false,
    onChange: (checked: boolean) =>
      alert(`Checkbox is now ${checked ? "checked" : "unchecked"}`),
  },
};

export default meta;

type Story = StoryObj<typeof MyCheckbox>;

export const Default: Story = {};
