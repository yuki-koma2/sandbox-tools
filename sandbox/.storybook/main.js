//https://dev.classmethod.jp/articles/tried-to-add-storybook-to-nextjs-project/
module.exports = {
  "typescript" : { reactDocgen: false },
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-next'
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}
