module.exports = {
  stories: ["../stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  typescript: {
    check: true, // type-check stories during Storybook build
  },

  // This is temporarily here until this issue is resolved
  // https://github.com/mui-org/material-ui/issues/24282
  webpackFinal(config) {
    delete config.resolve.alias["emotion-theming"];
    delete config.resolve.alias["@emotion/styled"];
    delete config.resolve.alias["@emotion/core"];
    return config;
  },
};
