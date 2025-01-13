import type { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { DisplayCard } from "@/components";

const meta = {
  title: "Components/DisplayCard",
  component: DisplayCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DisplayCard>;

export default meta;

const Template: StoryFn<typeof DisplayCard> = (args) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        width: "250px",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        padding: "1em",
        backgroundColor: "var(--beige-900)",
      }}
    >
      <DisplayCard {...args} />
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

export const TransactionsMobile = Template.bind({});
TransactionsMobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

TransactionsMobile.args = {
  header: "Transactions",
  buttonLabel: "View All",
  className: "transactions",
  onHeaderClick: () => console.log("View All Transactions"),
  children: <div></div>,
};

export const PotsMobile = Template.bind({});
PotsMobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

PotsMobile.args = {
  header: "Pots",
  buttonLabel: "See Details",
  className: "pots",
  onHeaderClick: () => console.log("View All Pots"),
  children: <div></div>,
};

export const BudgetsMobile = Template.bind({});
BudgetsMobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

BudgetsMobile.args = {
  header: "Budgets",
  buttonLabel: "View Budgets",
  className: "budgets",
  onHeaderClick: () => console.log("View All Budgets"),
  children: <div></div>,
};

export const RecurringBillsMobile = Template.bind({});
RecurringBillsMobile.parameters = {
  viewport: {
    defaultViewport: "mobile",
  },
};

RecurringBillsMobile.args = {
  header: "Recurring Bills",
  buttonLabel: "View Bills",
  className: "recurring-bills",
  onHeaderClick: () => console.log("View All Recurring Bills"),
  children: <div></div>,
};