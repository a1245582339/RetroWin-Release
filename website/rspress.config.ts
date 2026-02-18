import { defineConfig } from '@rspress/core';
import path from 'path';

export default defineConfig({
  root: 'docs',
  title: 'RetroWin',
  icon: 'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp',
  logo: 'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp',
  lang: 'en',
  globalStyles: path.join(__dirname, 'theme', 'index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'RetroWin',
      description: 'Bring the classic Windows taskbar to macOS',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'RetroWin',
      description: '在 macOS 上重现经典 Windows 任务栏',
    },
  ],
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/a1245582339/RetroWin-Release',
      },
    ],
    locales: [
      {
        lang: 'en',
        label: 'English',
        outlineTitle: 'On This Page',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        nav: [
          { text: 'Screenshots', link: '/en/guide/screenshots' },
          { text: 'Installation', link: '/en/guide/installation' },
          { text: 'FAQ', link: '/en/guide/faq' },
          { text: 'Contact', link: '/en/guide/contact' },
        ],
      },
      {
        lang: 'zh',
        label: '简体中文',
        outlineTitle: '目录',
        prevPageText: '上一页',
        nextPageText: '下一页',
        nav: [
          { text: '截图展示', link: '/zh/guide/screenshots' },
          { text: '安装指南', link: '/zh/guide/installation' },
          { text: '常见问题', link: '/zh/guide/faq' },
          { text: '联系我们', link: '/zh/guide/contact' },
        ],
      },
    ],
  },
});
