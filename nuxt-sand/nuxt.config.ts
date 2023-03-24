// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    storybook: {
        stories: [
            '~/stories/**/*.stories.mdx',
            '~/stories/**/*.stories.@(js|jsx|ts|tsx)',
        ],
        addons: [
            '@storybook/addon-links',
            '@storybook/addon-essentials',
        ],
        port: 4000,
        parameters: {
            backgrounds: {
              default: 'white',
              values: [
                { name: 'white', value: '#ffffff' },
                { name: 'gray', value: '#aaaaaa' },
              ],
            },
          }
      }
})
