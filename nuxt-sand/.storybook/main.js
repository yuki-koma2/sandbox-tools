// main.js

module.exports = {
    stories: ['../components/stories/**/*.stories.mdx', '../components/stories/**/*.stories.@(js|jsx|ts|tsx|vue)'],
    addons: ['@storybook/addon-essentials'],
    framework: '@storybook/vue3',
    core: {
      builder: '@storybook/builder-vite',
    },
  }