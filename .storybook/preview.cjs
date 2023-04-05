import { withThemeByDataAttribute } from '@storybook/addon-styling';
import { themes } from '@storybook/theming';

import '../src/styles/global.css';

export const decorators = [
    withThemeByDataAttribute({
        themes: {
            light: 'light',
            dark: 'dark',
        },
        defaultTheme: 'dark',
        attributeName: 'data-mode',
    }),
];

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    darkMode: {
        current: 'dark'
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'centered',
    viewMode: 'docs',
}