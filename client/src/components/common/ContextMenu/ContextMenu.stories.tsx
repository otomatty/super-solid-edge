import type { Meta, StoryObj } from "storybook-solidjs";
import { MyContextMenu } from "./ContextMenu";

const meta: Meta<typeof MyContextMenu> = {
  title: "Common/ContextMenu",
  component: MyContextMenu,
  args: {
    children: (
      <div style={{ padding: "50px", border: "1px solid #ccc" }}>
        Right-click here
      </div>
    ),
    items: [
      { label: "Edit", onSelect: () => alert("Edit clicked") },
      { label: "Duplicate", onSelect: () => alert("Duplicate clicked") },
      { label: "Delete", onSelect: () => alert("Delete clicked") },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof MyContextMenu>;

export const Default: Story = {};
