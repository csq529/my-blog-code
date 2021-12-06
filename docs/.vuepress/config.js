const navs = require('./config/navConfig')
const plugins = require('./config/plugin')
module.exports = {
  title: '变强不变秃的小强',
  description: '专注前端技术栈分享',
  plugins: plugins,
  themeConfig: {
    smoothScroll: true, // 点击左侧侧边栏,页面滚动效果,smoothScroll 选项来启用页面滚动效果,true为启动,false禁用
    displayAllHeaders: false, // 默认情况下，侧边栏只会显示由当前活动页面的标题（headers）组成的链接, 设置为 true 来显示所有页面的标题链接
    sidebar: 'auto', // 侧边栏配置,自动生成仅包含当前页面的标题链接的侧边栏
    nav: navs,
  }
} 