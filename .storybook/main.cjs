const {mergeConfig} = require('vite');
const {default: tsconfigPaths} = require('vite-tsconfig-paths');

module.exports = {
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
        '../src/stories/**/*.stories.tsx'
    ],
    addons: [
        'storybook-dark-mode',
        '@storybook/addon-a11y',
        '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-links',
        {
            name: '@storybook/addon-styling',
            options: {
                // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
                // For more details on this addon's options.
                postCss: true
            }
        }
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-vite'
    },
    features: {
        storyStoreV7: true,
        postcss: true,
    },
    staticDirs: ['../public'],
    viteFinal: async (config) => {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()]
        });
    }
};
