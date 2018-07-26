module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
				pathRewrite: {
					'^/api':''
				}
      },
			'/majax': {
                target: 'https://m.qidian.com',
                changeOrigin: true
            }
    }
  }
}