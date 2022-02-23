export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
// TODO: (yuki-koma2) 画像が表示されない問題がある

// Object.defineProperty(nextImage, 'default', {
//   configurable: true,
//   value: props => <img {...props} />
// });
