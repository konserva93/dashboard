// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [{
    plugin: cracoAlias,
    options: {
      source: 'tsconfig',
      baseUrl: '.',
      tsConfigPath: './tsconfig.path.json',
    },
  }],
  rules: [
    {
      test: /\.(png|jp(e*)g|svg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        },
      ],
    },
  ],
};
