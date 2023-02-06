const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config, { configType }) => {
    const babelLoaderRule = config.module.rules.find(
      (rule) => rule.test.toString() === /\.(mjs|tsx?|jsx?)$/.toString()
    );
    babelLoaderRule.exclude = [
      new RegExp("node_modules\\" + path.sep + "(?!(srn-ibl-component)\\/).*"),
    ];
    return config;
  },
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
};
