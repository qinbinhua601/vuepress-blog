var path = require('path')

module.exports = {
  base: '/vuepress-blog/',
  title: 'Welcome to My Blog',
  description: 'Just log out the simple life.',
  host: 'localhost',
  themeConfig: {
    nav: [
      { text: 'Life', link: '/life/1' },
      { text: 'Code', link: '/code/1' },
      { text: 'Study', link: '/study/1' },
    ],
    sidebar: [
      {
        title: 'Life',
        collapsable: false,
        children: [
          '/life/1',
          '/life/2',
          '/life/3',
        ]
      },
      {
        title: 'Code',
        collapsable: false,
        children: [
          '/code/1',
          '/code/2'
        ]
      },
      {
        title: 'Study',
        collapsable: false,
        children: [
          '/study/1'
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