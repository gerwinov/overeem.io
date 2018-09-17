module.exports = {
  pwa: {
    themeColor: '#f7b93a',
    msTileColor: '#ffffff'
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? './overeem.io/'
    : '/'
}
