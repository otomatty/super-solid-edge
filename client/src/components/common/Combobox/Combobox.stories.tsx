import type { Meta, StoryObj } from "storybook-solidjs";
import { MyCombobox } from "./Combobox";

const meta: Meta<typeof MyCombobox> = {
  title: "Common/Combobox",
  component: MyCombobox,
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    placeholder: "Select an option",
    onValueChange: (value: string) => alert(`Selected: ${value}`),
  },
};

export default meta;

type Story = StoryObj<typeof MyCombobox>;

export const Default: Story = {};
