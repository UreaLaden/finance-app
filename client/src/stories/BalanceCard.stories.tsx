import type { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { BalanceCard } from "@/components/BalanceCard/BalanceCard";
import { iBalanceCard } from "@/utils/models";

const meta = {
  title: "Components/BalanceCard",
  component: BalanceCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BalanceCard>;

export default meta;

const Template: StoryFn<iBalanceCard> = (args: iBalanceCard) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        width: "500px",
        height: "500px",
        border: "1px solid var(--grey-300)",
      }}
    >
      <BalanceCard {...args} />
    </div>
  </ThemeProvider>
);

const SectionTemplate: StoryFn<{card1:iBalanceCard,card2:iBalanceCard,card3:iBalanceCard}> = (
  {card1,  card2,card3}
) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        width: "300px",
        height: "500px",
        border: "1px solid var(--grey-300)",
      }}
    >
      <BalanceCard {...card1} />
      <BalanceCard {...card2} />
      <BalanceCard {...card3} />
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

export const Active = Template.bind({});
Active.args = {
  title: "Current Balance",
  amount: 1560.45,
  highlight: true,
};

export const InActive = Template.bind({});
InActive.args = {
  title: "Income",
  amount: 1937.45,
  highlight: false,
};

export const SectionMobile = SectionTemplate.bind({});
SectionMobile.parameters = {
  ...Mobile.parameters,
};
SectionMobile.args = {
    card1: {
        title: "Current Balance",
        amount: 1560.45,
        highlight: true,
    },
    card2: {
        title: "Income",
        amount: 1937.45,
        highlight: false,
    },
    card3: {
        title: "Expense",
        amount: 1937.45,
        highlight: false,
    },
}