const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const path = require('path');

module.exports = withPlugins(
  [
    [
      withImages({
        exclude: path.resolve(__dirname, './src/assets/svg'),
        webpack: (config) => {
          config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack']
          });

          return config;
        }
      })
    ]
  ],
  {
    distDir: 'dist'
  }
);
