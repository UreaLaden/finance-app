import type { Meta, StoryFn } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { TransactionEntry } from "@/components";
import { iTransaction } from "@/utils/models";

const meta = {
    title: "Components/TransactionEntry",
    component: TransactionEntry,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
} satisfies Meta<typeof TransactionEntry>;

export default meta;

const Template: StoryFn<typeof TransactionEntry> = (args) => (
    <ThemeProvider theme={theme}>
        <div
            style={{
                width: "300px",
                boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
                backgroundColor: "var(--beige-900)",
            }}
        >
            <TransactionEntry {...args} />
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

const creditTransaction: iTransaction = {
    id: "1",
    avatar: "swift-ride-share",
    name: "Ride Share Income",
    date: new Date(),
    amount: 27.42,
    recurring: false
}
const debitTransaction: iTransaction = {
    id: "2",
    avatar: "ecofuel-energy",
    name: "Light Bill",
    date: new Date(),
    amount: -132.75,
    recurring: false
}



export const CreditEntryMobile = Template.bind({});
CreditEntryMobile.parameters = {
    viewport: {
        defaultViewport: "mobile",
    }
};
CreditEntryMobile.args = {
    transaction: creditTransaction
}

export const DebitEntryMobile = Template.bind({});
DebitEntryMobile.parameters = {
    viewport: {
        defaultViewport: "mobile",
    }
};
DebitEntryMobile.args = {
    transaction: debitTransaction
}
