import type { Meta, StoryFn } from "@storybook/react";
import { CustomButton } from "@/components";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { iButtonProps } from "@/utils/models";

const meta = {
  title: "Components/CustomButton",
  component: CustomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CustomButton>;

export default meta;

const Template: StoryFn<iButtonProps> = (args: iButtonProps) => (
  <ThemeProvider theme={theme}>
    <div style={{
        width: "300px",
        height: "50px",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        padding: "2em",
    }}>
      <CustomButton {...args} />
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

export const Primary = Template.bind({});
Primary.args = {
  label: "Primary Button",
  type: "primary",
  onClick: () => alert("Button Clicked"),
  fullWidth:true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
  type: "secondary",
  onClick: () => alert("Button Clicked"),
  fullWidth:true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: "Tertiary Button",
  type: "tertiary",
  onClick: () => alert("Button Clicked"),
  fullWidth:false,
};

export const Destroy = Template.bind({});
Destroy.args = {
  label: "Destroy Button",
  type: "destroy",
  onClick: () => alert("Button Clicked"),
  fullWidth:true,
};
