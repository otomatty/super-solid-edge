import type { Meta, StoryObj } from "storybook-solidjs";
import { MyHoverCard } from "./HoverCard";

const meta: Meta<typeof MyHoverCard> = {
  title: "Common/HoverCard",
  component: MyHoverCard,
  args: {
    trigger: <span>Hover me</span>,
    content: (
      <div>
        <h3>Hover Card Content</h3>
        <p>This is the content of the hover card.</p>
      </div>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof MyHoverCard>;

export const Default: Story = {};
