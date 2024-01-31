module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    ['@babel/preset-typescript', {onlyRemoveTypeImports: true}],
  ],
  plugins: [
    'nativewind/babel',
    // [
    //   ['@babel/plugin-proposal-decorators', {legacy: true}],
    //   'babel-plugin-parameter-decorator',
    // ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-transform-flow-strip-types'],
    [
      ['@babel/plugin-proposal-decorators', {legacy: true}],
      'babel-plugin-parameter-decorator',
    ],
    ['@babel/plugin-transform-class-static-block'],
    ['@babel/plugin-transform-class-properties', {loose: true}],
    '@babel/plugin-transform-block-scoping',

    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@data': './src/data',
          '@domain': './src/domain',
          '@infrastructure': './src/infrastructure',
          '@components': './src/ui/components',
          '@views': './src/ui/views',
        },
      },
    ],
  ],
};
