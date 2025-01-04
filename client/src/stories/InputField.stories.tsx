import type { Meta, StoryFn } from "@storybook/react";

import InputField from "@/components/InputField/InputField";
import { InputFieldProps } from "@/utils/models";
import { InputFieldTypes } from "@/utils/helpers/constants";

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
  <div style={{ width: "300px", height: "100px", border: "1px solid red" }}>
    <InputField {...args} />
  </div>
);

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewPort: "mobile",
  },
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewPort: "tablet",
  },
};

export const Desktop = Template.bind({});
Desktop.parameters = {
  viewport: {
    defaultViewPort: "desktop",
  },
};

export const Basic = Template.bind({});
Basic.args = {
  type: InputFieldTypes.BASIC,
  label: "Label",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  type: InputFieldTypes.WITH_ICON,
  label: "Label",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  type: InputFieldTypes.WITH_ICON,
  label: "Label",
  helperText: "Helper text",
  placeholder: "Placeholder",
};

export const WithColor = Template.bind({});
WithColor.args = {
  type: InputFieldTypes.WITH_COLOR,
  label: "Label",
  helperText: "Helper text",
  placeholder: "Placeholder",
};
