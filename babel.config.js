module.exports = {
  presets: ['@babel/preset-typescript', '@babel/preset-env', '@babel/react'],
  plugins: [
    [
      'babel-plugin-styled-components',
      {
        pure: true,
      },
    ],
  ],
};
