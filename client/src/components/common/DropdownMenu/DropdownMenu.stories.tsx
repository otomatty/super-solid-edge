import type { Meta, StoryObj } from "storybook-solidjs";
import { MyDropdownMenu } from "./DropdownMenu";

const meta: Meta<typeof MyDropdownMenu> = {
  title: "Common/DropdownMenu",
  component: MyDropdownMenu,
  args: {
    trigger: <button>Open Menu</button>,
    items: [
      { label: "Edit", onSelect: () => alert("Edit clicked") },
      { label: "Duplicate", onSelect: () => alert("Duplicate clicked") },
      { label: "Delete", onSelect: () => alert("Delete clicked") },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof MyDropdownMenu>;

export const Default: Story = {};
