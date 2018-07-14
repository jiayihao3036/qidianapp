module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://qidian:3000',
        changeOrigin: true
      }
    }
  }
}
