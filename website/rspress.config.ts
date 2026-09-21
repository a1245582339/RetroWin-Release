import { defineConfig } from '@rspress/core';
import path from 'path';
import {
  OG_IMAGE,
  SITE_ICON,
  absoluteUrl,
  faqJsonLd,
  isZhRoute,
  softwareJsonLd,
  toEnPath,
  toZhPath,
  websiteJsonLd,
  ZH_KEYWORDS,
  EN_KEYWORDS,
} from './seo';

export default defineConfig({
  root: 'docs',
  title: 'RetroWin',
  icon: SITE_ICON,
  logo: SITE_ICON,
  lang: 'en',
  route: {
    cleanUrls: true,
  },
  head: [
    ['meta', { name: 'google-site-verification', content: 'BPN8rF9tut1j7Cp6iXHyq2JbjmqM2fX2ruTjhYMbVEg' }],
    ['meta', { name: 'author', content: 'RetroWin' }],
    ['meta', { name: 'theme-color', content: '#0078d4' }],
    ['meta', { property: 'og:site_name', content: 'RetroWin' }],
    ['meta', { property: 'og:image', content: OG_IMAGE }],
    ['meta', { property: 'og:image:alt', content: 'RetroWin Windows-style taskbar on macOS' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: OG_IMAGE }],
    ['link', { rel: 'apple-touch-icon', href: SITE_ICON }],
    route => ['link', { rel: 'canonical', href: absoluteUrl(route.routePath) }],
    route => ['meta', { property: 'og:url', content: absoluteUrl(route.routePath) }],
    route => ['meta', { property: 'og:locale', content: isZhRoute(route.routePath) ? 'zh_CN' : 'en_US' }],
    route => [
      'meta',
      { property: 'og:locale:alternate', content: isZhRoute(route.routePath) ? 'en_US' : 'zh_CN' },
    ],
    route => ['link', { rel: 'alternate', hreflang: 'en', href: absoluteUrl(toEnPath(route.routePath)) }],
    route => ['link', { rel: 'alternate', hreflang: 'zh-CN', href: absoluteUrl(toZhPath(route.routePath)) }],
    route => ['link', { rel: 'alternate', hreflang: 'x-default', href: absoluteUrl(toEnPath(route.routePath)) }],
    route => ['meta', { name: 'keywords', content: isZhRoute(route.routePath) ? ZH_KEYWORDS : EN_KEYWORDS }],
    softwareJsonLd,
    websiteJsonLd,
    route => faqJsonLd(route.routePath),
  ],
  globalStyles: path.join(__dirname, 'theme', 'index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'RetroWin - Classic Windows Taskbar Experience for macOS',
      description:
        'RetroWin brings the nostalgic Windows 98/XP/7/8.1/10/11 taskbar experience to your Mac. Customize your desktop with retro aesthetics and vintage functionality.',
    },
    {
      lang: 'zh',
      label: '简体中文',
      title: 'RetroWin - 在 macOS 上重现经典 Windows 任务栏',
      description:
        'RetroWin 将经典的 Windows 98/XP/7/8.1/10/11 任务栏体验带到 Mac，用复古美学和怀旧功能自定义你的桌面。',
    },
  ],
  themeConfig: {
    lastUpdated: true,
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
          { text: 'Screenshots', link: '/guide/screenshots' },
          { text: 'Wallpapers', link: '/guide/wallpapers' },
          { text: 'Installation', link: '/guide/installation' },
          { text: 'Pricing', link: '/guide/pricing' },
          { text: 'FAQ', link: '/guide/faq' },
          { text: 'Contact', link: '/guide/contact' },
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
