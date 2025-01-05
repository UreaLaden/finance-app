import type { Meta, StoryFn } from "@storybook/react";

import { InputField } from "@/components";
import { iDropdownContent, InputFieldProps } from "@/utils/models";
import { InputFieldTypes } from "@/utils/helpers/constants";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputField>;

export default meta;

const Template: StoryFn<InputFieldProps> = (args: InputFieldProps) => (
  <ThemeProvider theme={theme}>
    <div
      style={{
        width: "300px",
        height: "100px",
        boxShadow: "1px 1px 5px rgba(0,0,0,0.3)",
        padding: "2em",
      }}
    >
      <InputField {...args} />
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

export const BasicText = Template.bind({});
BasicText.args = {
  mode: InputFieldTypes.TEXT,
  label: "Basic Field",
  helperText: undefined,
  placeholder: "Placeholder",
};

export const ShowHelperText = Template.bind({});
ShowHelperText.args = {
  mode: InputFieldTypes.TEXT,
  label: "Basic Field",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const ShowHelperTextError = Template.bind({});
ShowHelperTextError.args = {
  mode: InputFieldTypes.TEXT,
  label: "Basic Field",
  helperText: "Not enough characters",
  placeholder: "Placeholder",
  error: true,
};

export const BasicPassword = Template.bind({});
BasicPassword.args = {
  mode: InputFieldTypes.PASSWORD,
  label: "Basic Field",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  mode: InputFieldTypes.WITH_ICON,
  adornmentPosition: "end",
  label: "Field With Icon",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  mode: InputFieldTypes.WITH_ICON,
  adornmentPosition: "start",
  label: "Field With Prefix",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

const colorOptions: iDropdownContent[] = [
  {
    contentMode: "color", theme: "var(--red-primary)",
    primaryText: "Red"
  },
  {
    contentMode: "color", theme: "var(--green-primary)",
    primaryText: "Green", secondaryText: "Already selected"
  },
  {
    contentMode: "color", theme: "var(--blue-secondary)",
    primaryText: "Blue"
  },
];

export const WithColor = Template.bind({});
WithColor.args = {
  mode: InputFieldTypes.WITH_COLOR,
  label: "Field With Color Tag",
  helperText: "Helper text",
  placeholder: "Placeholder",
  theme: "var(--red-primary)",
  dropdownContent: colorOptions,
};

const textOptions: iDropdownContent[] = [
  {
    contentMode: "text",
    primaryText: "Entertainment"
  },
  {
    contentMode: "text",
    primaryText: "Bills"
  },
  {
    contentMode: "text",
    primaryText: "Personal Care"
  },
]

export const WithoutColor = Template.bind({});
WithoutColor.args = {
  mode: InputFieldTypes.DROPDOWN,
  label: "Field With Color Tag",
  helperText: "Helper text",
  placeholder: "Placeholder",
  theme: "var(--red-primary)",
  dropdownContent: textOptions,
};
