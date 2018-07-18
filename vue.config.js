module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://qidian:3000',
                changeOrigin: true
            },
            '/majax': {
                target: 'https://m.qidian.com',
                changeOrigin: true
            }
        }
    }
}