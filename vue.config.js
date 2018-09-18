module.exports = {
  pwa: {
    themeColor: '#f7b93a',
    msTileColor: '#ffffff'
  },
  configureWebpack: {
    resolve: {
      alias: {
        'chart.js': 'chart.js/dist/Chart.js'
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/overeem.io/'
    : '/'
}
