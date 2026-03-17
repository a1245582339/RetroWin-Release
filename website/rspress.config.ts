import { defineConfig } from '@rspress/core';
import path from 'path';

export default defineConfig({
  root: 'docs',
  title: 'RetroWin',
  icon: 'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp',
  logo: 'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp',
  lang: 'en',
  head: [
    ['meta', { name: 'google-site-verification', content: 'BPN8rF9tut1j7Cp6iXHyq2JbjmqM2fX2ruTjhYMbVEg' }],
    ['meta', { name: 'keywords', content: 'RetroWin, Windows taskbar macOS, Windows 98 taskbar, Windows XP taskbar, macOS customization, retro UI, desktop customization, Mac taskbar app' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://github.com/a1245582339/picx-images-hosting/raw/master/icon1024.lw9clfrxq.webp' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "RetroWin",
      "operatingSystem": "macOS",
      "applicationCategory": "DesktopCustomization",
      "url": "https://retrowin-site.pages.dev",
      "description": "RetroWin brings the nostalgic Windows 98/XP/7/10 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.",
      "offers": {
        "@type": "Offer",
        "price": "8.8",
        "priceCurrency": "CNY"
      }
    })],
  ],
  globalStyles: path.join(__dirname, 'theme', 'index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'RetroWin - Classic Windows Taskbar Experience for macOS',
      description: 'RetroWin brings the nostalgic Windows 98/XP/7/10 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'RetroWin - 在 macOS 上重现经典 Windows 任务栏',
      description: 'RetroWin 将经典的 Windows 98/XP/7/10 任务栏体验带到 Mac，用复古美学和怀旧功能自定义你的桌面。',
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
          { text: 'Wallpapers', link: '/en/guide/wallpapers' },
          { text: 'Installation', link: '/en/guide/installation' },
          { text: 'Pricing', link: '/en/guide/pricing' },
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
          { text: '经典壁纸', link: '/zh/guide/wallpapers' },
          { text: '安装指南', link: '/zh/guide/installation' },
          { text: '购买许可证', link: '/zh/guide/pricing' },
          { text: '常见问题', link: '/zh/guide/faq' },
          { text: '联系我们', link: '/zh/guide/contact' },
        ],
      },
    ],
  },
});
