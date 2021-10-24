const path = require('path');
const deployPath = '/Volumes/Xone/web/Varilao/Laravel-Vari/public';
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': path.resolve(__dirname, 'public'),
        '@scss': path.resolve(__dirname, 'public/scss'),
        '@css': path.resolve(__dirname, 'public/css'),
        '@coms': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
      }
    }
  },

  publicPath: isProd ? '/generated' : '/',
  outputDir: `${deployPath}/generated`,
}
