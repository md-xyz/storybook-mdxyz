module.exports = {
  stories: ["../src/components/**/*.stories.js"],

  // .storybook/main.js

  refs: {
    'design-system': {
      title: 'FORGE Design System',
      // 👇 The url provided by Chromatic when it was deployed
      url: 'https://63df23909a5b3a47ad4d2add-dvkinxjybb.chromatic.com/?path=/story/pureinboxscreen--default'
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
