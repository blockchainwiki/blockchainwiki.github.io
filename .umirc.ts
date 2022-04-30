import { defineConfig } from 'dumi';

export default defineConfig({
  ssr: {},
  hash: true,
  exportStatic: {},
  sitemap: {
    hostname: 'https://chouxiangc.github.io',
  },
  theme: {
    '@c-primary': '#e72e14',
  },
  scripts: ['https://s9.cnzz.com/z_stat.php?id=1281106460&web_id=1281106460'],
  styles: ['a[title=站长统计] { display: none; }'],
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '//cdn.jsdelivr.net/gh/chouxiangc/chouxiangc.github.io@gh-pages/'
      : '/',
  title: '抽象词',
  mode: 'site',
  favicon: 'https://s2.loli.net/2022/04/30/VUJmAZy9hFnzt5M.png',
  logo: 'https://s2.loli.net/2022/04/30/VUJmAZy9hFnzt5M.png',
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  metas: [
    {
      name: 'title',
      content: '抽象词',
    },
    {
      name: 'keywords',
      content:
        '抽象词, 语言学, 逻辑学, 离散, 集合论, 抽象代数, 概率论, 科普笔记, 人生思考',
    },
    {
      name: 'description',
      content: '词汇是一个人认知的边界，越远越抽象。',
    },
  ],
  navs: [
    {
      title: '哔哩哔哩',
      path: 'https://space.bilibili.com/361511875',
    },
    {
      title: 'YouTube',
      path: 'https://www.youtube.com/c/%E6%8A%BD%E8%B1%A1%E8%AF%8D',
    },
  ],
  // more config: https://d.umijs.org/config
});
