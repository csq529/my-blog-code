const plugins = [
  '@vuepress/back-to-top', // 返回到到顶部插件
  '@vuepress/nprogress', // 进度条插件
  'vuepress-plugin-table-of-contents', // 为你的 VuePress 站点增加目录组件,支持在md和vue中写<TOC />,生成目录树
  'reading-progress', // 阅读进度插件
  'vuepress-plugin-smooth-scroll', // 你的 VuePress 站点中使用平滑滚动
  'vuepress-plugin-cat', // 编程猫
  [
    '@vuepress/active-header-links',
    {
      // 页面滚动时自动激活侧边栏链接的插件配置
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
    },
  ],
  [
    'vuepress-plugin-auto-sidebar',
    {
      titleMode: 'titlecase', // 标题模式
      collapsable: true, // 设置为true,开启折叠
      // sidebarDepth: 0, // 标题的深度
      collapseList: [
        // 折叠的路由列表
        // "/frontend/css/"
      ],
      uncollapseList: [
        // 不折叠的路由列表
      ],
    },
  ],
]

module.exports = plugins