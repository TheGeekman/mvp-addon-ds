import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "light",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const yourTheme = {
  colors: {
    primary: "#0070f3",
    secondary: "#1f1f1f",
  },
  fonts: {
    fs1: "12px",
    fs2: "14px",
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: yourTheme,
    },
    defaultTheme: "light",
    Provider: ThemeProvider,
  }),
];

export default preview;
