module.exports = {
  stories: ["../src/components/**/*.stories.js"],

  // .storybook/main.js

  refs: {
    'design-system': {
      title: 'FORGE Design System',
      // 👇 The url provided by Chromatic when it was deployed
      url: 'https://6389014fa89cf397a8d4caeb-ekakhmbiik.chromatic.com/'
    }
  },

  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-a11y",
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  features: {
    interactionsDebugger: true
  }
};
