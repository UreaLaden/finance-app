import type { Meta, StoryFn } from "@storybook/react";
import { LoginForm } from "@/components";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/globals.styles";
import { iLoginFormProps } from "@/utils/models";
import { MockRouterProvider } from "@/utils/helpers/mocks";
import { paths } from "@/utils/routers/config";

const meta = {
  title: "Components/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;

interface StoryArgs extends iLoginFormProps {
  initialEntries: string[];
}

const Template: StoryFn<StoryArgs> = ({ initialEntries, ...props }) => (
  <ThemeProvider theme={theme}>
    <MockRouterProvider initialEntries={initialEntries}>
      <LoginForm {...props} />
    </MockRouterProvider>
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

export const LoginMobile = Template.bind({});
LoginMobile.parameters = {
  ...Mobile.parameters,
};
LoginMobile.args = {
  onSubmit: () => {},
  initialEntries: [paths.Login],
};
export const LoginTablet = Template.bind({});
LoginTablet.parameters = {
  ...Tablet.parameters,
};
LoginTablet.args = {
  onSubmit: () => {},
  initialEntries: [paths.Login],
};

export const LoginDesktop = Template.bind({});
LoginDesktop.parameters = {
  ...Desktop.parameters,
};
LoginDesktop.args = {
  onSubmit: () => {},
  initialEntries: [paths.Login],
};

export const SignupMobile = Template.bind({});
SignupMobile.parameters = {
    ...Mobile.parameters,
};
SignupMobile.args = {
    onSubmit: () => {},
    initialEntries: [paths.Signup],
};
