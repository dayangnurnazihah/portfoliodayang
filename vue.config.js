const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Add a rule for PDF files
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash:8].[ext]', // Customize output filename
        outputPath: 'assets/pdfs/', // Output directory for PDFs
        publicPath: 'assets/pdfs/', // Path in the application
      });
  },
});
