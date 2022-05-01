import { defineConfig } from 'dumi';

export default defineConfig({
  ssr: {},
  hash: true,
  exportStatic: {},
  sitemap: {
    hostname: 'https://blockchainwiki.github.io',
  },
  theme: {
    '@c-primary': '#e72e14',
  },
  scripts: ['https://s9.cnzz.com/z_stat.php?id=1281106460&web_id=1281106460'],
  styles: ['a[title=站长统计] { display: none; }'],
  publicPath:
    process.env.NODE_ENV === 'production'
      ? '//cdn.jsdelivr.net/gh/blockchainwiki/blockchainwiki.github.io@gh-pages/'
      : '/',
  title: '区块链百科',
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
      content: '区块链百科',
    },
    {
      name: 'keywords',
      content:
        '区块链, 以太坊, 比特币, 加密货币, 虚拟货币, BTC, ETH, BlockChain, Ethereum, Crypto Currency, Metaverse',
    },
    {
      name: 'description',
      content: '做最好的区块链世界工具网站。',
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
