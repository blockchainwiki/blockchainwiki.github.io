import { defineConfig } from 'dumi';

export default defineConfig({
  title: '抽象词',
  mode: 'site',
  favicon: 'https://s2.loli.net/2022/04/30/VUJmAZy9hFnzt5M.png',
  logo: 'https://s2.loli.net/2022/04/30/VUJmAZy9hFnzt5M.png',
  hash: true,
  exportStatic: {},
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
        '抽象词, 语言学, 逻辑学, 离散,集合论,抽象代数, 概率论科普笔记, 人生思考',
    },
    {
      name: 'description',
      content: '词汇是一个人认知的边界, 越远越抽象',
    },
  ],
  sitemap: {
    hostname: 'https://chouxiangci.github.io',
  },
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '//cdn.jsdelivr.net/gh/chouxiangc/chouxiangc.github.io@gh-pages/'
      : '/',
  // more config: https://d.umijs.org/config
});
