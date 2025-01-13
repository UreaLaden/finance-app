import type { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { BillCard } from "@/components";

const meta = {
  title: "Components/BillCard",
  component: BillCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BillCard>;

export default meta;

const Template: StoryFn<typeof BillCard> = (args) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        width: "250px",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        padding: "1em",
        backgroundColor: "var(--white)",
      }}
    >
      <BillCard {...args} />
    </div>
  </ThemeProvider>
);

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "tablet",
  },
};

export const Desktop = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewport: "desktop",
  },
};

export const Paid = Template.bind({});
Paid.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

Paid.args = {
  type: "paid",
};

export const Upcoming = Template.bind({});
Upcoming.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

Upcoming.args = {
  type: "upcoming",
};

export const DueSoon = Template.bind({});
DueSoon.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

DueSoon.args = {
  type: "due",
};