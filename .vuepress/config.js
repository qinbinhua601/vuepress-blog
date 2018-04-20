var path = require('path')

module.exports = {
  base: '/vuepress-blog/',
  title: 'Welcome to My Blog',
  description: 'My Blog is focusing on Finance!',
  themeConfig: {
    nav: [
      { text: 'Category1', link: '/category1/1' },
      { text: 'Category2', link: '/category2/1' },
      { text: 'Category3', link: '/category3/1' },
    ],
    sidebar: [
      {
        title: 'Category1',
        collapsable: false,
        children: [
          '/category1/1'
        ]
      },
      {
        title: 'category2',
        collapsable: false,
        children: [
          '/category2/1',
          '/category2/2'
        ]
      },
      {
        title: 'category3',
        collapsable: false,
        children: [
          '/category3/1'
        ]
      },
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        'public': path.resolve(__dirname, './public')
      }
    }
  }
}